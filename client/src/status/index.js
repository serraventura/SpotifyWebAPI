module.exports = function(app){

    statusService.$inject = ['Settings'];

    function statusService(Settings) {

        var statusService = {};

        statusService.loading = false;

        statusService.qs = {
            artistId: Settings.defaultArtist,
            country: Settings.defaultCountry
        };

        return statusService;

    }

    app.service('statusService', statusService);

}
