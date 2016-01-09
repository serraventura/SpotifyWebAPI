module.exports = function(app) {

    searchService.$inject = [
        '$q',
        '$http'
    ];

    function searchService($q, $http) {

        var searchService = {};

        searchService.search = function(searchTerm) {

            var d = $q.defer();
            var URL = 'http://localhost:9000/musicexplorer/search?searchTerm='+searchTerm;

            $http({
                method: 'get',
                url: URL
            }).success(function(res) {
                return d.resolve(res);
            }).error(function(err) {
                return d.reject(err);
            });

            return d.promise;

        };

        return searchService;

    }

    app.service('searchService', searchService);

}
