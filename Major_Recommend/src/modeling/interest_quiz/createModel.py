from random import seed
import pandas as pd
from sklearn.ensemble import RandomForestClassifier
from sklearn.model_selection import train_test_split
from sklearn.metrics import mean_squared_error, r2_score
import pickle as cPickle
from sklearn.preprocessing import OneHotEncoder		
import numpy as np
from sklearn.metrics import classification_report
from sklearn.utils.class_weight import compute_class_weight 


data = pd.read_csv("outputdata3.csv")

class_mapping = {
    "Creative Arts": 0,
    "Math, Sciences, and Engineering": 1,
    "Social Sciences": 2,
    "Public Service, Law, and Policy": 3,
    "Business and Communication": 4
}

data['labels'] = data['labels'].replace(class_mapping)
# Separate the features and the target variable
X = data.drop(data.columns[15:],axis=1)  
y = data["labels"]  
print(data.shape)   


X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.3)

class_weights = compute_class_weight(	
                                        class_weight = "balanced",
                                        classes = np.unique(y_train),
                                        y = y_train                                                    
                                    )
class_weights = dict(zip(np.unique(y_train), class_weights))

print(class_weights)

# Create an instance of the random forest classifier with class weights
clf = RandomForestClassifier(criterion="log_loss")

clf.fit(X_train, y_train)   
y_pred = clf.predict(X_test)

print(classification_report(y_test, y_pred, target_names=class_mapping.keys()))
# Export the model using cPickle

with open("model4.pkl", "wb") as f:
    cPickle.dump(clf, f)

'''
df=pd.read_csv("../../../data/abt_ver1.csv")

df_new =df[df["Major"].duplicated()== False]["Major"]
df_new2 =df[df["Major_category"].duplicated()== False]["Major_category"]

'''