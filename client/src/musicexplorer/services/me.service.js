module.exports = function(app) {

    meService.$inject = [
        '$q',
        '$http',
        'statusService'
    ];

    function meService($q, $http, statusService) {

        var meService = {};

        meService.getData = function() {

            var d = $q.defer();
            var URL = 'http://localhost:9000/musicexplorer/get';

            $http({
                method: 'get',
                url: URL,
                params: statusService.qs
            }).success(function(res) {
                return d.resolve(res);
            }).error(function(err) {
                return d.reject(err);
            });

            return d.promise;

        };

        return meService;

    }

    app.service('meService', meService);

}
