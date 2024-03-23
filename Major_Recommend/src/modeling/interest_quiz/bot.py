from __future__ import division
import random
import numpy as np
import pandas as pd
import interests_cleaning as cl
import raw_loyola
import sys
import operator
import copy
from collections import Counter
from functools import reduce



class LoyolaQuizBot(object):
    

    def __init__(self, raw_data, fields_dict):
        """Instantiate a LoyolaQuizBot class instance."""
        self.raw_data = raw_data
        self.fields_dict = fields_dict
        self.i_c = 2
        self.clean_data = cl.majors_string_to_list(self.raw_data)
        self.majors_set = cl.all_majors(self.clean_data)
        self.mapped_lst = cl.create_labels(self.clean_data, self.fields_dict)
        
    def one_quiz(self):
        
        bot_answers = []
        field_occurences = []

        for question in self.mapped_lst:
            rand_bool = random.choice([True, False])
            bot_answers.append(int(rand_bool))
            if rand_bool:
                field_occurences.append(question[self.i_c])
        total_counts = reduce(operator.add, field_occurences)
        print("total_counts",total_counts)

        field_probs = self._make_weight_counter(total_counts)
        print("field_probs",field_probs)
        return bot_answers, field_probs

    def _make_weight_counter(self, cnter_dict):
        
        weight_dict = copy.deepcopy(cnter_dict)

        total = np.sum(list(weight_dict.values()))

        for k, v in weight_dict.items():
            weight_dict[k] = v / total

        return weight_dict

    def _sample_field_distribution(self, num_samples, field_probs):
      
        fields = []
        weights = []

        for field, prob in field_probs.items():
            fields.append(field)
            weights.append(prob)
        labels = np.random.choice(fields, size=num_samples, p=weights)

        return labels

    def _make_column_names(self, num_questions):
        
        cols = []

        for i in range(num_questions):
            col_name = 'q' + str(i+1)
            cols.append(col_name)

        return cols

    def _build_single_dataframe(self, bot_answers, labels, col_names, quiz_num, field_probs):
        
        size = labels.shape[0]
        bot_answers_dict = dict(zip(col_names, bot_answers))
        df = pd.DataFrame(columns=col_names)  # Use columns argument to set column names
        df = pd.concat([df, pd.DataFrame([bot_answers_dict] * size)], ignore_index=True)
        df['labels'] = labels  # Assign labels correctly
        df['quiz_num'] = quiz_num
        proba_col_names = []
        for k, v in field_probs.items():
            col_name = k.lower().replace(' ', '_').replace(',', '') + '_proba'
            df[col_name] = np.full(size, field_probs[k], dtype=float)
            proba_col_names.append(col_name)

        return df, proba_col_names


    def multi_quiz(self, num_times, num_questions, num_samples, it_check=1000):
        
        cols = self._make_column_names(num_questions)

        for quiz_num in range(1, num_times+1):
            bot_answers, field_probs = self.one_quiz()
            labels = self._sample_field_distribution(num_samples, field_probs)

            
            
            single_df, proba_col_names = self._build_single_dataframe(
                                                                bot_answers,
                                                                labels,
                                                                cols,
                                                                quiz_num,
                                                                field_probs)
            if quiz_num == 1:
                running_df = copy.deepcopy(single_df)
            else:
                running_df = pd.concat([running_df, single_df], ignore_index=True)
            if quiz_num % it_check == 0:
                print("I've taken the quiz {} times!\n".format(quiz_num))

        # Convert only the answer columns to integers
        answer_cols = cols + ['labels']
        running_df[answer_cols] = running_df[answer_cols]

        correct_order_cols = answer_cols + ['quiz_num'] + proba_col_names

        return running_df[correct_order_cols]

    def multi_quiz_and_write_file(self, num_times, num_questions,
                                  num_samples, out_filename, it_check=1000):
       
        final_df = self.multi_quiz(num_times, num_questions,
                                   num_samples, it_check)
        print ("Finished taking quiz, writing file\n")
        final_df.to_csv(out_filename, index=False)
        print ("Successfully wrote a file to {}".format(out_filename))

if __name__ == '__main__':
    num_times = 20000
    num_samples = 2
    num_questions = 15
    out_filename = "outputdata3.csv"

    quiz_bot = LoyolaQuizBot(raw_loyola.get_new_data(), cl.get_fields_dict())
    quiz_bot.multi_quiz_and_write_file(num_times,
                                       num_questions,
                                       num_samples,
                                       out_filename)
