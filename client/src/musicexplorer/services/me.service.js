module.exports = function(app) {

    meService.$inject = [
        '$q',
        '$http',
        'ParamsService',
        'Settings'
    ];

    function meService($q, $http, ParamsService, Settings) {

        var meService = {};

        meService.getTopTracksByArtist = function() {

            var d = $q.defer();
            var URL = 'https://api.spotify.com/v1/artists/6mdiAmATAx73kdxrNrnlao/top-tracks?country=GB';

            $http({
                method: 'get',
                url: URL,
                param: ParamsService.qs,
                headers: {
                    'X-KSYS-TOKEN': Settings.apiToken
                }
            }).success(function(res) {
                return d.resolve(res);
            }).error(function(err) {
                return d.reject(err);
            });

            return d.promise;

        };

        meService.getAllAlbumsByArtist = function() {

            var d = $q.defer();
            var URL = 'https://api.spotify.com/v1/artists/6mdiAmATAx73kdxrNrnlao/albums?album_type=album&limit=50';

            $http({
                method: 'get',
                url: URL,
                param: ParamsService.qs,
                headers: {
                    'X-KSYS-TOKEN': Settings.apiToken
                }
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
