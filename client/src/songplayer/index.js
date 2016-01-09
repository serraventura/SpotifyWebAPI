import template from './sp.html';

module.exports = function(app){

    _controller.$inject = [
        '$scope',
        '$sce'
    ];

    function songPlayer(){

        return{

            replace: true,
            template: template,
            restrict: 'EA',
            controller: _controller,
            scope: {
                trackName: '@trackName',
                trackStreaming: '@trackStreaming',
                trackDuration: '@trackDuration',
                albumName: '@albumName',
                albumImage: '@albumImage'
            },
            link: function (scope, element, attrs) {

            }

        }

    }

    function _controller ($scope, $sce) {

        $scope.trustAsResourceUrl = function (resource) {
            return $sce.trustAsResourceUrl(resource);
        };

    }

    app.directive('songPlayer', songPlayer);

}
