from sklearn.model_selection import GridSearchCV
from sklearn.neighbors import KNeighborsClassifier


class KNN:
    def __init__(self, sample_answers, dataset_list, strand_list):
        self.sample_answers = sample_answers
        self.dataset_list = dataset_list
        self.strand_list = strand_list

    def predict(self):
        knn = KNeighborsClassifier(n_neighbors=self.calculate_k())
        knn.fit(self.dataset_list, self.strand_list)
        self.calculate_distance(knn)
        recommendation = knn.predict(self.sample_answers)
        print(recommendation)

    def calculate_k(self):
        model = KNeighborsClassifier()
        param_grid = {'n_neighbors': [x for x in range(5, 21)]}
        grid_search = GridSearchCV(model, param_grid, cv=5)
        grid_search.fit(self.dataset_list, self.strand_list)
        k = grid_search.best_params_['n_neighbors']
        print(f"K is {k}")
        print("Best Accuracy:", grid_search.best_score_)
        return k


    def calculate_distance(self, knn):
        distances, indices = knn.kneighbors(self.sample_answers)
        print(distances)
        print(indices)
