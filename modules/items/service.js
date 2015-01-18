/**
 * Created by Nate Smithen on 17/01/15.
 */

angular.module('itemsModule')
    .service('itemsService',['$http',function($http) {


        service = this;

        service.getData = function() {
            return $http.get("app/data/recommendations.json")
        }

    }])
