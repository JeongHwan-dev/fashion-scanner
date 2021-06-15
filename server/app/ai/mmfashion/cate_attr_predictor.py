from __future__ import division
import argparse

import torch
from mmcv import Config
from mmcv.runner import load_checkpoint

from mmfashion.core import AttrPredictor, CatePredictor
from mmfashion.models import build_predictor
from mmfashion.utils import get_img_tensor

import os
from pathlib import Path
import numpy as np

BASE_DIR = Path(__file__).resolve().parent

def cate_attr_predictor(pillow_image):
    cfg = Config.fromfile(BASE_DIR / "configs/category_attribute_predict/global_predictor_vgg.py")
    checkpoint = os.path.join(BASE_DIR, "checkpoint/AttrCatePredict/vgg16_global.pth")
    img_tensor = get_img_tensor(pillow_image, False)
    landmark_tensor = torch.zeros(8)
    cfg.model.pretrained = None
    model = build_predictor(cfg.model)
    load_checkpoint(model, checkpoint, map_location='cpu')
    landmark_tensor = landmark_tensor.cpu()
    model.eval()
    attr_prob, cate_prob = model(img_tensor, attr=None, landmark=landmark_tensor, return_loss=False)
    cate_prob_array = cate_prob.detach().numpy() * (-1)
    cate_prob_array.sort()
    first_category_prob = cate_prob_array[0][0] * (-1)
    attr_prob_array = attr_prob.detach().numpy() * (-1)
    attr_prob_array.sort()
    attr_prob_array = attr_prob_array[0][:3] * (-1)
    attr_prob_list = attr_prob_array.tolist()

    cate_predictor = CatePredictor(cfg.data.test)
    attr_predictor = AttrPredictor(cfg.data.test)
    data_1 = cate_prob.data.cpu().numpy()
    answer_1 = np.argsort(data_1[0])[::-1]
    data_2 = attr_prob.data.cpu().numpy()
    answer_2 = np.argsort(data_2[0])[::-1]

    attributes = []
    count = 0
    for i in range(len(answer_2)):
        if count > 3:
            break

        attribute = attr_predictor.attr_idx2name[answer_2[i]]
        if attribute == 'no_dress':
            continue
        
        attributes.append(attribute)
        count += 1

    result = { 
        'category':cate_predictor.cate_idx2name[answer_1[0]], 
        'category_prob': first_category_prob,
        'attribute_1': attributes[0],
        'attribute_2' : attributes[1], 
        'attribute_3' : attributes[2],
        'attribute_1_prob': attr_prob_list[0],
        'attribute_2_prob': attr_prob_list[1],
        'attribute_3_prob': attr_prob_list[2]

    }
    
    return result
