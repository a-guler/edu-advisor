from Major_Recommend.src import final_questions as fq
from Major_Recommend.src.modeling.outcomes_quiz import outcome_model as om
from Major_Recommend.src.modeling.outcomes_quiz import prettify_output as p

import pandas as pd
import numpy as np
import json
import os
import pickle as cPickle



def load_model(filename):
    
    with open(filename,"rb") as f:
        model = cPickle.load(f)
    return model


def make_field_dicts(classes, probas):
    
    field_dict = {}
    for label, proba in zip(classes, probas.reshape(-1,)):
        field_dict[label] = proba
    return field_dict


def parse_interest_ans(answer_list):
    
    for i, ans in enumerate(answer_list):
        answer_list[i] = int(ans)
    model_format_array = np.array(answer_list).reshape(1, -1)
    return model_format_array


def calculate_scores(answer_list):
    
    for i, ans in enumerate(answer_list):
        answer_list[i] = float(ans)
    np_arr = np.array(answer_list)
    return np.sum(np_arr)



def score(int_answers, risk_ans ,inc_ans):

    int_answers, risk_ans, inc_ans = (int_answers,
                                      risk_ans,
                                      inc_ans)
    answer_array = parse_interest_ans(int_answers)
    risk_score = calculate_scores(risk_ans)
    inc_score = calculate_scores(inc_ans)
    classes= [
    "Creative Arts",
    "Math, Sciences, and Engineering",
    "Social Sciences",
    "Public Service, Law, and Policy",
    "Business and Communication"
    ]
    probas = model.predict_proba(answer_array)
    print(probas)
    field_dict = make_field_dicts(classes, probas)
    final_df = om.calculate_final_prob(job_df,
                                       risk_score,
                                       inc_score,
                                       field_dict
                                       ).sort_values(by='final_probs',
                                                     ascending=False)
    pretty_columns = p.prettified_columns
    final_columns = p.final_columns
    pretty_df = p.prettify_final_output(final_df,
                                        pretty_columns,
                                        final_columns,
                                        20)
    print(pretty_df)
    object_list=[]
    for index,row in pretty_df.iterrows():
        obj=p.row_to_object(row)
        object_list.append(obj)
    
    return object_list


model = load_model(os.path.join('Major_Recommend','src','modeling','interest_quiz','model4.pkl'))
job_df = pd.read_csv(os.path.join('Major_Recommend','data','abt_ver1.csv'))
