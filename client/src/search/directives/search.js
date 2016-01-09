import template from './../views/search.html';

module.exports = function(app){

    _controller.$inject = [
        '$scope',
        'searchService',
        'statusService'
    ];

    function search(){

        return{

            replace: true,
            template: template,
            restrict: 'EA',
            controller: _controller,
            link: function (scope, element, attrs) {

            }

        }

    }

    function _controller($scope, searchService, statusService) {

        $scope.searchTerm = '';

        $scope.triggerSearch = function (e) {

            if (e.keyCode !== 13 && $scope.searchTerm.length > 3) {

                searchService.search($scope.searchTerm).then(function (data) {
                    $scope.searchResult = data.artists.items;
                });

            } else if (e.keyCode === 13 && $scope.searchTerm.length > 3 && $scope.searchResult) {
                statusService.qs.artistId = _.first($scope.searchResult).id;
                $scope.searchResult = undefined;
            }

        };

        $scope.triggerArtist = function (id) {
            statusService.qs.artistId = id;
            $scope.searchResult = undefined;
        }

    }

    app.directive('search', search);

}
