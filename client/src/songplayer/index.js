import template from './sp.html';

module.exports = function(app){

    function songPlayer(){

        return{

            replace: true,
            template: template,
            restrict: 'EA',
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

    app.directive('songPlayer', songPlayer);

}
