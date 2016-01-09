module.exports = function(app) {

    searchService.$inject = [
        '$q',
        '$http',
        'statusService'
    ];

    function searchService($q, $http, statusService) {

        var searchService = {};

        searchService.search = function(searchTerm) {

            var d = $q.defer();
            var URL = 'https://api.spotify.com/v1/search?q='+searchTerm+'&type=artist';

            $http({
                method: 'get',
                url: URL,
                //param: statusService.qs
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
