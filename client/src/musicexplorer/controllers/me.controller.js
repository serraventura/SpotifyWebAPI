module.exports = function(app) {

    meCtrl.$inject = [
        '$scope',
        'ParamsService',
        'Settings',
        'meService'
    ];

    function meCtrl($scope, ParamsService, Settings, meService) {

        $scope.selectedTab = Settings.defaultTab;

        function loadMusicExplorerData() {

            meService.getTopTracksByArtist().then(function (res) {

                if (res) {

                    console.log(res);
                    $scope.topTracksList = res.tracks;
                    $scope.artistName = _.first(_.first(res.tracks).artists).name;
                    $scope.relatedAlbums = _.uniq(_.map($scope.topTracksList, 'album'), 'name');

                }

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

        }

        $scope.activeTab = function (tab) {
            $scope.selectedTab = tab;
        }

        $scope.$watch(function () {
            return ParamsService.qs;
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
