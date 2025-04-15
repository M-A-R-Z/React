from SupaBaseConnector import SupaBaseConnector
from KNN import KNN
from flask import Flask, jsonify
from flask_cors import CORS


sample_answers = [[5, 4, 1]]
dataset_list = []
strand_list = []
dataset_values = []
sql = SupaBaseConnector()
app = Flask(__name__)
CORS(app)

def run_algorithm():
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

@app.route("/Assessment")
def get_questions():
    response = sql.select_questions()
    return jsonify(response.data)


@app.route("/recommendation")
def get_recommendation():
    run_algorithm()
    return jsonify({"recommendation": "Recommendation logic executed."})

if __name__ == '__main__':
    
    app.run(debug=True)