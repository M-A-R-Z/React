import math

closest_points = []
included_id = []

class KNN:
    def __init__(self, stem_user, humms_user, abm_user, stem_datapoint, humms_datapoint, abm_datapoint, dataset_id, k):
        self.x1 = stem_user
        self.y1 = humms_user
        self.z1 = abm_user
        self.x2 = stem_datapoint
        self.y2 = humms_datapoint
        self.z2 = abm_datapoint
        self.dataset_id = dataset_id
        self.k = k

    def stem(self):
        x = (self.x2-self.x1)**2
        print("stem pass")
        return x

    def humms(self):
        y = (self.y2-self.y1)**2
        print("humms pass")
        return y

    def abm(self):
        z = (self.z2-self.z1)**2
        print("abm pass")
        return z

    def distance_formula(self):
        distance = math.sqrt(self.stem() + self.humms() + self.abm())
        self.store_distance(distance, self.dataset_id)
        print("distance_formula pass")

    def store_distance(self, distance, dataset_id):
        if len(closest_points) < self.k:
            closest_points.append(distance)
            included_id.append(dataset_id)

        else:
            self.arrange()
            print(distance)
            print(dataset_id)
            if max(closest_points) > distance:
                replace = closest_points.index(max(closest_points))
                closest_points[replace] = distance
                included_id[replace] = dataset_id
                self.arrange()
        print(closest_points)
        print(included_id)
        print("store_distance pass")

    def arrange(self):
        stop = 0
        while stop < 2:
            for q in range(1, self.k):
                if closest_points[q] < closest_points[q-1]:
                    closest_points[q], closest_points[q - 1] = closest_points[q-1], closest_points[q]
                    included_id[q], included_id[q - 1] = included_id[q - 1], included_id[q]
            else:
                stop += 1
        print("arrange pass")
