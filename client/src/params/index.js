module.exports = function(app){

    ParamsService.$inject = ['Settings'];

    function ParamsService(Settings) {

        var ParamsService = {};

        ParamsService.qs = {
            artistId: Settings.defaultArtist
        };

        return ParamsService;

    }

    app.service('ParamsService', ParamsService);

}
