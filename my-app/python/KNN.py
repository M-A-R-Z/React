from sklearn.model_selection import GridSearchCV
from sklearn.neighbors import KNeighborsClassifier




class KNN:
    def __init__(self, sample_answers, dataset_list, strand_list):
        self.sample_answers = sample_answers
        self.dataset_list = dataset_list
        self.strand_list = strand_list

    def start_algorithm(self):
        knn = KNeighborsClassifier(n_neighbors=self.calculate_k())
        knn.fit(self.dataset_list, self.strand_list)
        results = self.predict(knn)
        return results
         

        
        

    def calculate_k(self):
        model = KNeighborsClassifier()
        param_grid = {'n_neighbors': [x for x in range(5, 11)]}
        param_grid = {'n_neighbors': [x for x in range(5, 11)]}
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
        return indices[0], distances[0]
         
    
    def predict(self, knn):
        indices, distances = self.calculate_distance(knn)
        nearest_neighbors = []
        
        for i in range(len(indices)):            
            nearest_neighbors.append(self.strand_list[indices[i]])
        print(f"Nearest Neighbors: {nearest_neighbors}")
        total_stem = nearest_neighbors.count("STEM")
        total_humss = nearest_neighbors.count("HUMSS")
        total_abm = nearest_neighbors.count("ABM")
        strand_votes = {"STEM": total_stem, "HUMSS": total_humss, "ABM": total_abm}
        vote_score = [total_stem, total_humss, total_abm]
        print(f"Votes: {strand_votes}")
        if vote_score.count(max(vote_score)) > 1:
            recommendation = self.tie_breaker(strand_votes, nearest_neighbors, distances)
            
        else:
            recommendation = max(strand_votes, key=strand_votes.get)
            print(f"Recommendation: {recommendation}")
        strand_votes["recommendation"] = recommendation
        return strand_votes


    def tie_breaker(self, strand_votes, nearest_neighbors, distances):
        tied_strands = [key for key, value in strand_votes.items() if value == max(strand_votes.values())]
        print(f"Tie between: {tied_strands}")
        weighted_distances = {"STEM": 0, "HUMSS": 0, "ABM":0}
        for i in range(len(nearest_neighbors)):
            if nearest_neighbors[i] in tied_strands:
                convert_to_weighted = float(1/distances[i])
                weighted_distances[nearest_neighbors[i]] += convert_to_weighted
        print(f"Weighted Distances: {weighted_distances}")
        recommendation = max(weighted_distances, key=weighted_distances.get)
        print(f"Final Recommendation: {recommendation}")
        return recommendation     
  



        
        
