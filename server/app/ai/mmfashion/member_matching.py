# -*- coding: utf-8 -*-
from .cate_attr_predictor import cate_attr_predictor
import functools

def calculate_member_score_by_category(category, category_prob, members):
    jisoo_categories = {'Anorak': 0.1, 'Blazer': 0.2, 'Blouse': 0.1, 'Bomber': 0.1, 'Button-Down': 0.1, 'Caftan': 0.2, 'Cape': 0.1, 'Capris': 0.2, 'Cardigan': 0.3, 'Chinos': 0.3, 'Coat': 0.2, 'Coverup': 0.4, 'Culottes': 0.4, 'Cutoffs': 0.1, 'Dress': 0.25, 'Flannel': 0.4, 'Gauchos': 0.4, 'Halter': 0.1, 'Henley': 0.4, 'Hoodie': 0.1, 'Jacket': 0.2, 'Jeans': 0.1, 'Jeggings': 0.1, 'Jersey': 0.1, 'Jodhpurs': 0.1, 'Joggers': 0.1, 'Jumpsuit': 0.1, 'Kaftan': 0.4, 'Kimono': 0.4, 'Leggings': 0.1, 'Nightdress': 0.1, 'Onesie': 0.3, 'Parka': 0.1, 'Peacoat': 0.2, 'Poncho': 0.2, 'Robe': 0.3, 'Romper': 0.1, 'Sarong': 0.2, 'Shirtdress': 0.4, 'Shorts': 0.4, 'Skirt': 0.4, 'Sundress': 0.4, 'Sweater': 0.1, 'Sweatpants': 0.1, 'Sweatshorts': 0.1, 'Tank': 0.1, 'Tee': 0.3, 'Top': 0.1, 'Trunks': 0.4, 'Turtleneck': 0.3}
    jennie_categories = {'Anorak': 0.3, 'Blazer': 0.1, 'Blouse': 0.3, 'Bomber': 0.2, 'Button-Down' :0.2, 'Caftan': 0.1, 'Cape': 0.3, 'Capris': 0.3, 'Cardigan': 0.4, 'Chinos': 0.1, 'Coat': 0.3, 'Coverup': 0.2, 'Culottes': 0.2, 'Cutoffs': 0.3, 'Dress': 0.25, 'Flannel': 0.2, 'Gauchos': 0.1, 'Halter': 0.4, 'Henley': 0.3, 'Hoodie': 0.2, 'Jacket': 0.1, 'Jeans': 0.4, 'Jeggings': 0.2, 'Jersey': 0.3, 'Jodhpurs': 0.4, 'Joggers': 0.4, 'Jumpsuit': 0.4, 'Kaftan': 0.1, 'Kimono': 0.3, 'Leggings': 0.2, 'Nightdress': 0.4, 'Onesie': 0.4, 'Parka': 0.2, 'Peacoat': 0.1, 'Poncho': 0.4, 'Robe': 0.4, 'Romper': 0.4, 'Sarong': 0.4, 'Shirtdress': 0.2, 'Shorts': 0.1, 'Skirt': 0.3, 'Sundress': 0.1, 'Sweater': 0.4, 'Sweatpants': 0.2, 'Sweatshorts': 0.2, 'Tank': 0.3, 'Tee': 0.1, 'Top': 0.4, 'Trunks': 0.1, 'Turtleneck': 0.2}
    lisa_categories = {'Anorak': 0.4, 'Blazer': 0.4, 'Blouse': 0.2, 'Bomber': 0.3, 'Button-Down': 0.3, 'Caftan': 0.4, 'Cape': 0.4, 'Capris': 0.4, 'Cardigan': 0.1, 'Chinos': 0.4, 'Coat': 0.1, 'Coverup': 0.1, 'Culottes': 0.3, 'Cutoffs': 0.4, 'Dress': 0.25 , 'Flannel': 0.3, 'Gauchos': 0.2, 'Halter': 0.3, 'Henley': 0.1, 'Hoodie': 0.4, 'Jacket': 0.3, 'Jeans': 0.3, 'Jeggings': 0.3, 'Jersey': 0.4, 'Jodhpurs': 0.3, 'Joggers': 0.3, 'Jumpsuit': 0.2, 'Kaftan': 0.2, 'Kimono': 0.1, 'Leggings': 0.3, 'Nightdress': 0.2, 'Onesie': 0.2, 'Parka': 0.4, 'Peacoat': 0.4, 'Poncho': 0.3, 'Robe': 0.1, 'Romper': 0.3, 'Sarong': 0.1, 'Shirtdress': 0.1, 'Shorts': 0.2, 'Skirt': 0.1, 'Sundress': 0.2, 'Sweater': 0.2, 'Sweatpants': 0.3, 'Sweatshorts': 0.3, 'Tank': 0.2, 'Tee': 0.4, 'Top': 0.3, 'Trunks': 0.3, 'Turtleneck': 0.4}
    rose_categories = {'Anorak': 0.2, 'Blazer': 0.3, 'Blouse': 0.4, 'Bomber': 0.4, 'Button-Down': 0.4, 'Caftan': 0.3, 'Cape': 0.2, 'Capris': 0.1, 'Cardigan': 0.2, 'Chinos': 0.2, 'Coat': 0.4, 'Coverup': 0.3, 'Culottes': 0.1, 'Cutoffs': 0.2, 'Dress': 0.25, 'Flannel': 0.1, 'Gauchos': 0.3, 'Halter': 0.2, 'Henley': 0.2, 'Hoodie': 0.3, 'Jacket': 0.4, 'Jeans': 0.2, 'Jeggings': 0.4, 'Jersey': 0.2, 'Jodhpurs': 0.2, 'Joggers': 0.2, 'Jumpsuit': 0.3, 'Kaftan': 0.3, 'Kimono': 0.2, 'Leggings': 0.4, 'Nightdress': 0.3, 'Onesie': 0.1, 'Parka': 0.3, 'Peacoat': 0.3, 'Poncho': 0.1, 'Robe': 0.2, 'Romper': 0.2, 'Sarong': 0.3, 'Shirtdress': 0.3, 'Shorts': 0.3, 'Skirt': 0.2, 'Sundress': 0.3, 'Sweater': 0.3, 'Sweatpants': 0.4, 'Sweatshorts': 0.4, 'Tank': 0.4, 'Tee': 0.2, 'Top': 0.2, 'Trunks': 0.2, 'Turtleneck': 0.1}
    
    member_cate_dict = {
        "jisoo" : jisoo_categories,
        "jennie" : jennie_categories,
        "lisa" : lisa_categories,
        "rose" : rose_categories
    }

    member_score_dict = {
        "jisoo" : 0,
        "jennie" : 0,
        "lisa" : 0,
        "rose" : 0
    }
    
    for i in range(len(members)):
        member = members[i]
        member_score_dict[member] += member_cate_dict[member][category] * category_prob

    return member_score_dict

def calculate_member_score_by_attributes(attributes, attributes_prob, member_score_dict, members):
    jisoo_attributes = {'chiffon': 0.05, 'conventional': 0.1 , 'cotton': 0.1, 'crew_neckline': 0.15, 'denim': 0, 'embroidered': 0.2, 'faux': 0.2, 'floral': 0.15, 'graphic': 0.05, 'knit': 0.15, 'lattice': 0.05, 'leather': 0, 'long_sleeve': 0.2, 'loose': 0.15, 'maxi_length': 0.2, 'mini_length': 0, 'no_neckline': 0.2, 'pleated': 0.05, 'short_sleeve': 0, 'sleeveless': 0, 'solid': 0.05, 'square_neckline': 0, 'striped': 0.05, 'tight':0, 'v_neckline': 0.15}
    jennie_attributes = {'chiffon': 0.15, 'conventional': 0.1, 'cotton':  0.1, 'crew_neckline': 0.2, 'denim': 0.2, 'embroidered': 0.15, 'faux': 0, 'floral': 0.05, 'graphic': 0, 'knit': 0, 'lattice': 0.15, 'leather': 0.05, 'long_sleeve': 0, 'loose': 0.2, 'maxi_length': 0.05 , 'mini_length': 0.15,  'no_neckline': 0.15, 'pleated':  0.2, 'short_sleeve': 0.05, 'sleeveless': 0.15, 'solid': 0, 'square_neckline': 0.15, 'striped': 0, 'tight': 0.15, 'v_neckline': 0.2}
    lisa_attributes = {'chiffon': 0, 'conventional': 0.1, 'cotton': 0.1, 'crew_neckline':  0.05, 'denim': 0.15, 'embroidered': 0, 'faux': 0.05, 'floral':0, 'graphic': 0.2, 'knit': 0.05, 'lattice': 0.2, 'leather': 0.2, 'long_sleeve': 0.15, 'loose': 0.05, 'maxi_length': 0.15, 'mini_length': 0.05, 'no_neckline': 0.05, 'pleated': 0.15, 'short_sleeve': 0.2, 'sleeveless': 0.05, 'solid': 0.2, 'square_neckline': 0.2, 'striped': 0.2, 'tight': 0.05, 'v_neckline': 0.05}
    rose_attributes  = {'chiffon': 0.2, 'conventional': 0.1, 'cotton': 0.1, 'crew_neckline': 0, 'denim': 0.05, 'embroidered': 0.05, 'faux': 0.15, 'floral': 0.2, 'graphic': 0.15, 'knit': 0.2, 'lattice': 0, 'leather': 0.15, 'long_sleeve': 0.05, 'loose': 0, 'maxi_length': 0, 'mini_length': 0.2, 'no_neckline': 0, 'pleated': 0, 'short_sleeve': 0.15, 'sleeveless': 0.2, 'solid': 0.15, 'square_neckline': 0.05, 'striped': 0.15, 'tight': 0.2, 'v_neckline': 0}

    member_attr_dict = {
        "jisoo" : jisoo_attributes,
        "jennie" : jennie_attributes,
        "lisa" : lisa_attributes,
        "rose" : rose_attributes
    }
    
    for i in range(len(members)):
        member = members[i]
        for j in range(len(attributes)):
            member_score_dict[member] += member_attr_dict[member][attributes[j]] * attributes_prob[j]

    return member_score_dict

def time_count(func):
    @functools.wraps(func)
    def wrapper(*args, **kwargs):
        import timeit
        start_time = timeit.default_timer()
        result = func(*args, **kwargs)
        end_time = timeit.default_timer()
        print("%f초 걸립니다." % (end_time - start_time))
        return result
    return wrapper

@time_count
def match_to_member(img_file):
    result = cate_attr_predictor(img_file)
    category = result["category"]
    attributes = [result["attribute_1"],result["attribute_2"],result["attribute_3"]]
    attributes_prob = [result["attribute_1_prob"],result["attribute_2_prob"],result["attribute_3_prob"]]
    category_prob = result["category_prob"]

    members = ['jisoo', 'jennie', 'lisa', 'rose']
    member_score_dict = calculate_member_score_by_category(category, category_prob, members)
    member_score_dict = calculate_member_score_by_attributes(attributes, attributes_prob, member_score_dict, members)
    matched_member = sorted(member_score_dict.items(), key=lambda x:x[1], reverse=True)[0][0]
    return { "member": matched_member, "category": category, "category_prob": category_prob, "attributes": attributes, "attributes_prob": attributes_prob }
