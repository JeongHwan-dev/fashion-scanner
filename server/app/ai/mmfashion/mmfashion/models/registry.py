from ..utils import Registry

BACKBONES = Registry('backbone')
GLOBALPOOLING = Registry('global_pool')  # global pooling
ATTRPREDICTOR = Registry('attr_predictor')  # predict attributes
CATEPREDICTOR = Registry('cate_predictor')  # predict category
LOSSES = Registry('loss')  # loss function
PREDICTOR = Registry('predictor')
GEOMETRICMATCHING = Registry('geometric_matching')
