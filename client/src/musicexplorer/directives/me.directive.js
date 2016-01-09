import template from './../views/me.html';

module.exports = function(app){

    function musicExplorer(){

        return{

            template: template,
            restrict: 'EA',
            replace: true,
            controller: 'meCtrl',
            link: function (scope, element, attrs) {

            }

        }

    }

    app.directive('musicExplorer', musicExplorer);

}
