from SupaBaseConnector import SupaBaseConnector
from KNN import KNN
from flask import Flask, jsonify, request
from flask_cors import CORS


sample_answers = [[40, 24, 30]]
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
    return jsonify(response)

@app.route('/submit', methods=['POST'])
def submit_answers():
    data = request.get_json()
    answers = data.get('answers', [])
    print(answers)
    # Here you would typically save the answers to a database or process them
    


if __name__ == '__main__':
    
    app.run(debug=True)