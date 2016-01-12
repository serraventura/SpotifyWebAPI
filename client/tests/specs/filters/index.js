describe('Filter: humanizeTime', function () {

    var expect = chai.expect;
    beforeEach(angular.mock.module('app'));

    var humanizeTime;
    beforeEach(angular.mock.inject(function ($filter) {
        humanizeTime = $filter('humanizeTime');
    }));

    it('', function () {
        expect(humanizeTime(436826)).to.equal('7 minutes');
    });

});
