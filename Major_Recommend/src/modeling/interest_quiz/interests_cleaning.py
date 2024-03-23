from __future__ import division
from collections import Counter
import numpy as np
import copy
import operator
from functools import reduce


def majors_string_to_list(qa_lst):
    
    cleaned_lst = copy.deepcopy(qa_lst)

    for question in cleaned_lst:
        question[1] = question[1].split(',')

    return cleaned_lst


def make_counter(question, i, fields_dict):
    
    fields = []
    for major in question[i]:
        for field, majors_set in fields_dict.items():
            if major in majors_set:
                fields.append(field)
            else:
                continue
    return Counter(fields)


def create_labels(clean_qa, fields_dict):
    
    mapped_lst = copy.deepcopy(clean_qa)

    for question in mapped_lst:
        cnter = make_counter(question, 1, fields_dict)
        question.append(cnter)

    return mapped_lst


def all_majors(clean_qa):
    
    majors_collection = []

    for qa in clean_qa:
        major_lst = qa[1]
        majors_collection.append(major_lst)

    return set(reduce(operator.concat, majors_collection))


def get_fields_dict():
    
    fields_dict = {
         "Creative Arts": set(
                              ['Art History', 'Dance',
                               'Film and Digital Media',
                               'Music', 'Studio Art', 'Theatre',
                               'Visual Communication']),

         "Math, Sciences, and Engineering": set(
                                                ['Biochemistry',
                                                 'Bioinformatics',
                                                 'Biology', 'Biophysics',
                                                 'Chemistry',
                                                 'Communications Networks and Security',
                                                 'Economics',
                                                 'Engineering Science',
                                                 'Environmental Science',
                                                 'Environmental Studies',
                                                 'Exercise Science',
                                                 'Information Technology',
                                                 'Mathematics and Computer Science',
                                                 'Physics', 'PreHealth',
                                                 'Software Engineering',
                                                 'Statistics',
                                                 'Theoretical Physics and Applied Mathematics',
                                                 'Computer Science']),

         "Business and Communication": set(
                                           ['Accounting',
                                            'Advertising and Public Relations',
                                            'Communication Studies',
                                            'Education', 'English',
                                            'Entrepreneurship', 'Finance',
                                            'Human Resources Mgmt',
                                            'Information Systems',
                                            'International Business',
                                            'Journalism', 'Marketing',
                                            'Operations Management',
                                            'Sports Management']),

         "Social Sciences": set(
                                ['African Studies and the African Diaspora',
                                 'Anthropology', 'Classical Civilization',
                                 'French', 'Greek', 'History', 'Italian',
                                 'International Studies', 'Latin',
                                 'Philosophy', 'Psychology',
                                 'Religious Studies', 'Sociology',
                                 'Sociology and Anthropology', 'Spanish',
                                 'Theology',
                                 'Womens Studies and Gender Studies']),

         "Public Service, Law, and Policy": set(
                                                ['Criminal Justice and Criminology',
                                                 'Environmental Policy',
                                                 'Forensic Science',
                                                 'Health Systems Management',
                                                 'Human Services', 'Nursing',
                                                 'Political Science', 'PreLaw',
                                                 'Social Work'])
    }
    return fields_dict
