module.exports = function(app) {

    meService.$inject = [
        '$q',
        '$http',
        'statusService'
    ];

    function meService($q, $http, statusService) {

        var meService = {};

        meService.getTopTracksByArtist = function() {

            var d = $q.defer();
            var URL = 'https://api.spotify.com/v1/artists/'+statusService.qs.artistId+'/top-tracks?country=GB';

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

        meService.getAllAlbumsByArtist = function() {

            var d = $q.defer();
            var URL = 'https://api.spotify.com/v1/artists/'+statusService.qs.artistId+'/albums?album_type=album&limit=50';

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

        return meService;

    }

    app.service('meService', meService);

}
