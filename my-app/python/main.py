from SupaBaseConnector import SupaBaseConnector
from KNN import KNN
from flask import Flask, jsonify



sample_answers = [[5, 4, 1]]
dataset_list = []
strand_list = []
dataset_values = []

sql = SupaBaseConnector()

app = Flask(__name__)



@app.route("/assessement")
def get_questions():
    sql.select_questions()
    response = sql.table("Questions").select("*").execute()
    return jsonify(response.data)







sql.select_initial_data()
datasets = sql.fetch_data() #<-----Dictionaries within a list
print(datasets)

for i in range(len(datasets)): #<-----compile all dataset and classifier to list
    values = list(datasets[i].values())
    dataset_values = values[1:4]
    dataset_list.append(dataset_values)
    strand_list.append(values[-1])

algorithm = KNN(sample_answers, dataset_list, strand_list)
algorithm.predict()

