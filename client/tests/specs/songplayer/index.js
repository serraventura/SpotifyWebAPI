describe('Directive: Items', function () {

    var element, scope;
    var expect = chai.expect;

    // load the directive's module
    beforeEach(angular.mock.module('app'));
    //beforeEach(angular.mock.module('Templates')); // setup in karma to get template from .html

    beforeEach(angular.mock.inject(function ($rootScope) {
        scope = $rootScope.$new();
    }));

    it('', angular.mock.inject(function ($compile) {

        element = angular.element('<song-player track-name="Id Kill If I Had To" track-streaming="https://p.scdn.co/mp3-preview/c8ed8436326a3330d91ea89964e552fc9498fcc6" track-duration="436826" album-name="Rooster Illusion" album-image="https://i.scdn.co/image/62fed15659a5ded992da84971ae72389ef56f057"></song-player>');
        element = $compile(element)(scope);
        scope.$digest();

        //element = $(element);

        //console.log('xxxxx: ', )

        expect(element.find('li').eq(0).text()).to.equal('Id Kill If I Had To');
        expect(element.find('li').eq(1).text()).to.equal('Duration: 7 minutes');

    }));
});
