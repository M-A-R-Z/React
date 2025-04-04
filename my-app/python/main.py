from SupaBaseConnector import SupaBaseConnector
from KNN import KNN

K = 3
sample_answers = [8, 3, 4]
parameter_list = []

sql = SupaBaseConnector()

sql.select_initial_data()
datasets = sql.fetch_data() #<-----Dictionaries within a list
print(datasets)
for x in range(len(datasets)):
    values = list(datasets[x].values())
    dataset_id = values[0]
    parameter_list += sample_answers
    print(parameter_list)
    for i in range(1, 4):
        parameter_list.append(values[i])
    parameter_list.append(dataset_id)
    parameter_list.append(K)
    print(parameter_list)
    algorithm = KNN(*parameter_list)
    parameter_list.clear()
    algorithm.distance_formula()
