module.exports = function(app) {

    meCtrl.$inject = [
        '$scope',
        'statusService',
        'Settings',
        'meService',
        '$sce'
    ];

    function meCtrl($scope, statusService, Settings, meService, $sce) {

        $scope.selectedTab = Settings.defaultTab;

        function loadMusicExplorerData() {

            statusService.loading = true;

            meService.getTopTracksByArtist().then(function (res) {

                statusService.loading = false;

                if (res) {

                    console.log(res);
                    $scope.topTracksList = res.tracks;
                    $scope.artistName = _.first(_.first(res.tracks).artists).name;
                    $scope.relatedAlbums = _.uniq(_.map($scope.topTracksList, 'album'), 'name');

                }

            }, function (err) {
                statusService.loading = false;
            });

            meService.getAllAlbumsByArtist().then(function (res) {

                if (res) {

                    $scope.allAlbumsList = _.uniq(res.items, function (item) {
                        return (item.name||'').toLowerCase()
                    });

                }

            });

        }

        $scope.getAlbumImage = function (arr, resolution) {
            var small = _.last(arr).url;

            if (!resolution) {
                return small;
            } else {
                return _.get(_.filter(arr, {width: resolution}), ['0', 'url'], small);
            }

        };

        $scope.activeTab = function (tab) {
            $scope.selectedTab = tab;
        };

        $scope.isLoading = function () {
            return statusService.loading;
        };

        $scope.$watch(function () {
            return statusService.qs;
        }, function (newVal, oldVal) {
            if (JSON.stringify(newVal) !== JSON.stringify(oldVal)) {
                loadMusicExplorerData();
            };

        }, true);

        //initial load
        loadMusicExplorerData();

    }

    app.controller('meCtrl', meCtrl);

}
