module.exports = function(app) {

    meCtrl.$inject = [
        '$scope',
        'statusService',
        'Settings',
        'meService'
    ];

    function meCtrl($scope, statusService, Settings, meService) {

        var that = this;
        $scope.selectedTab = Settings.defaultTab;

        this.loadMusicExplorerData = function() {

            statusService.loading = true;

            meService.getData().then(function (res) {

                statusService.loading = false;

                if (res.topTracks.tracks.length > 0) {

                    console.log(res);
                    $scope.topTracksList = res.topTracks.tracks;
                    $scope.artistName = _.first(_.first($scope.topTracksList).artists).name;
                    $scope.relatedAlbums = _.uniq(_.map($scope.topTracksList, 'album'), 'name');

                } else {
                    $scope.topTracksList = [];
                    $scope.artistName = [];
                    $scope.relatedAlbums = [];
                }

                if (res.albums.items.length > 0) {

                    $scope.allAlbumsList = _.uniq(res.albums.items, function (item) {
                        return (item.name||'').toLowerCase()
                    });

                } else {
                    $scope.allAlbumsList = [];
                }

            }, function (err) {
                statusService.loading = false;
                $scope.topTracksList = undefined;
                $scope.artistName = undefined;
                $scope.relatedAlbums = undefined;
                $scope.allAlbumsList = undefined;

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
                that.loadMusicExplorerData();
            };

        }, true);

        //initial load
        that.loadMusicExplorerData();

    }

    app.controller('meCtrl', meCtrl);

}
