describe('Filter: humanizeTime', function () {

    beforeEach(module('app'));

    var humanizeTime;
    beforeEach(inject(function ($filter) {
        humanizeTime = $filter('humanizeTime');
    }));

    it('', function () {
        expect(humanizeTime(436826)).toBe('7 minutes');
    });

});
