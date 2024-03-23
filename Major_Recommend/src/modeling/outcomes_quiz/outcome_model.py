from __future__ import division
import pandas as pd
import numpy as np
from Major_Recommend.src.modeling.outcomes_quiz import outcome_cleaning as cl


def normalize_ratings(df, ratings_col):
    return cl.normalize_column(df, ratings_col) + 1


def calculate_j_metric(df, rt_score, id_score):
    return (rt_score * df.norm_risk_rating) + (id_score * df.norm_gain_rating)


def calculate_outcome_weight(df, j_metric_col):
    return cl.normalize_column(df, j_metric_col) * 2


def calculate_final_prob(df, rt_score, id_score, field_dict):
    df['norm_risk_rating'] = normalize_ratings(df, 'risk_rating')
    df['norm_gain_rating'] = normalize_ratings(df, 'gain_rating')
    df['j_metric'] = calculate_j_metric(df, rt_score, id_score)
    df['final_metric'] = calculate_outcome_weight(df, 'j_metric')
    df['final_probs'] = df.apply(final_prob_mapper, args=(field_dict,),
                                 axis=1)
    return df


def final_prob_mapper(row, prob_field_dict):
    for field, proba in prob_field_dict.items():
        if row['field_of_study'] == field:
            return row['final_metric'] * proba
        else:
            continue
