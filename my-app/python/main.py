from SupaBaseConnector import SupaBaseConnector
from KNN import KNN
from flask import Flask, jsonify, request
from flask_cors import CORS


sample_answers = {"STEM:": 40, "HUMSS": 25, "ABM": 32}
tie_sample_answers = {"STEM:": 31, "HUMSS": 31, "ABM": 31}
dataset_list = []
strand_list = []

sql = SupaBaseConnector()
app = Flask(__name__)
CORS(app)

def run_algorithm(user_dataset):
    dataset_list = []
    strand_list = []
    dataset_values = []
    sql.select_initial_data()
    datasets = sql.fetch_data() #<-----Dictionaries within a list
    print(datasets)

    for i in range(len(datasets)): #<-----compile all dataset and classifier to list
        values = list(datasets[i].values())
        dataset_values = values[1:4]
        dataset_list.append(dataset_values)
        strand_list.append(values[-1])

    predict_dataset = list(user_dataset.values())
    predict_dataset = [predict_dataset]  # Convert to 2D array for prediction
    algorithm = KNN(predict_dataset, dataset_list, strand_list)
    results = algorithm.start_algorithm()
    print(results)
    return results


def merge_strand_answers(answers): 
    strand_scores = {"STEM": 0, "HUMSS": 0, "ABM":0}
    for i in range(len(answers)):

    
        if i % 3 == 0:
            strand_scores["STEM"] += answers[i]
        elif i % 3 == 1:
            strand_scores["HUMSS"] += answers[i]
        else:
            strand_scores["ABM"] += answers[i]
    print(strand_scores)
    return strand_scores

reults_data = run_algorithm(sample_answers)
print("---------------------------------------------------------")
reults_data = run_algorithm(tie_sample_answers)

@app.route("/Assessment")
def get_questions():
    response = sql.select_questions()
    return jsonify(response)

@app.route('/submit', methods=['POST'])
def submit_answers():
    data = request.get_json()
    answers = data.get('answers', [])
    print(f"Test {answers}")
    user_dataset = merge_strand_answers(answers) 
    reults_data = run_algorithm(user_dataset)
    print(f"Results: {reults_data}")
    return jsonify(reults_data)


if __name__ == '__main__':
    
    app.run(debug=True)