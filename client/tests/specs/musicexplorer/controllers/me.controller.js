describe('Music Explorer Controller:  ', function () {

    var scope, ctrl;
    var data = {"topTracks":{"tracks":[{"album":{"album_type":"album","available_markets":["AD","AR","AT","AU","BE","BG","BO","BR","CA","CH","CL","CO","CR","CY","CZ","DE","DK","DO","EC","EE","ES","FI","FR","GB","GR","GT","HK","HN","HU","IE","IS","IT","LI","LT","LU","LV","MC","MT","MX","MY","NI","NL","NO","NZ","PA","PE","PH","PL","PT","PY","RO","SE","SG","SI","SK","SV","TR","TW","US","UY"],"external_urls":{"spotify":"https://open.spotify.com/album/1EXNsfCb14okTifPFaeWFN"},"href":"https://api.spotify.com/v1/albums/1EXNsfCb14okTifPFaeWFN","id":"1EXNsfCb14okTifPFaeWFN","images":[{"height":640,"url":"https://i.scdn.co/image/f8e3eb35e0444dd7e0ba10522d7e19e9d4b614cc","width":640},{"height":300,"url":"https://i.scdn.co/image/a317e1e792ceb0ff9253b3c975fc077222722918","width":300},{"height":64,"url":"https://i.scdn.co/image/62fed15659a5ded992da84971ae72389ef56f057","width":64}],"name":"Rooster Illusion","type":"album","uri":"spotify:album:1EXNsfCb14okTifPFaeWFN"},"artists":[{"external_urls":{"spotify":"https://open.spotify.com/artist/1LvWAKQ20drCAtoMXmbl71"},"href":"https://api.spotify.com/v1/artists/1LvWAKQ20drCAtoMXmbl71","id":"1LvWAKQ20drCAtoMXmbl71","name":"Vinyl Laranja","type":"artist","uri":"spotify:artist:1LvWAKQ20drCAtoMXmbl71"}],"available_markets":["AD","AR","AT","AU","BE","BG","BO","BR","CA","CH","CL","CO","CR","CY","CZ","DE","DK","DO","EC","EE","ES","FI","FR","GB","GR","GT","HK","HN","HU","IE","IS","IT","LI","LT","LU","LV","MC","MT","MX","MY","NI","NL","NO","NZ","PA","PE","PH","PL","PT","PY","RO","SE","SG","SI","SK","SV","TR","TW","US","UY"],"disc_number":1,"duration_ms":263080,"explicit":false,"external_ids":{"isrc":"BRNFS1400097"},"external_urls":{"spotify":"https://open.spotify.com/track/1wYKyiZFfxHKV2HfPShTFV"},"href":"https://api.spotify.com/v1/tracks/1wYKyiZFfxHKV2HfPShTFV","id":"1wYKyiZFfxHKV2HfPShTFV","name":"Jungbomb","popularity":0,"preview_url":"https://p.scdn.co/mp3-preview/aceaf839fa824abacbdbc7bc98117b1e03703bdb","track_number":6,"type":"track","uri":"spotify:track:1wYKyiZFfxHKV2HfPShTFV"}]},"albums":{"href":"https://api.spotify.com/v1/artists/1LvWAKQ20drCAtoMXmbl71/albums?offset=0&limit=50&album_type=album","items":[{"album_type":"album","available_markets":["AD","AR","AT","AU","BE","BG","BO","BR","CA","CH","CL","CO","CR","CY","CZ","DE","DK","DO","EC","EE","ES","FI","FR","GB","GR","GT","HK","HN","HU","IE","IS","IT","LI","LT","LU","LV","MC","MT","MX","MY","NI","NL","NO","NZ","PA","PE","PH","PL","PT","PY","RO","SE","SG","SI","SK","SV","TR","TW","US","UY"],"external_urls":{"spotify":"https://open.spotify.com/album/1EXNsfCb14okTifPFaeWFN"},"href":"https://api.spotify.com/v1/albums/1EXNsfCb14okTifPFaeWFN","id":"1EXNsfCb14okTifPFaeWFN","images":[{"height":640,"url":"https://i.scdn.co/image/f8e3eb35e0444dd7e0ba10522d7e19e9d4b614cc","width":640},{"height":300,"url":"https://i.scdn.co/image/a317e1e792ceb0ff9253b3c975fc077222722918","width":300},{"height":64,"url":"https://i.scdn.co/image/62fed15659a5ded992da84971ae72389ef56f057","width":64}],"name":"Rooster Illusion","type":"album","uri":"spotify:album:1EXNsfCb14okTifPFaeWFN"}],"limit":50,"next":null,"offset":0,"previous":null,"total":1}};

    beforeEach(function() {

        var serviceMock = {};

        module('app', function ($provide) {
            $provide.value('service', serviceMock);
        });

        inject(function($q) {

            serviceMock.getData = function() {
                var d = $q.defer();
                d.resolve(data);
                return d.promise;

            };

        })

    });

    beforeEach(inject(function ($rootScope, statusService, Settings, service) {

        scope = $rootScope.$new();

        ctrl = $controller('meCtrl', {
            '$scope': scope,
            'statusService': statusService,
            '$filter': $filter,
            'Settings': Settings,
            'meService': service
        });

        scope.$digest();

    }));

    it('On Load Page Top Track list should have only 1 track', function () {
        expect( scope.topTracksList.length ).toBe(1);
    });

    it('On Load Page Artist should be Vinyl Laranja', function () {
        expect( scope.artistName ).toEqual('Vinyl Laranja');
    });

    it('On Load Page one related album should exist', function () {
        expect( scope.relatedAlbums.length ).toBe(1);
    });

    it('On Load Page the related album should be Rooster Illusion', function () {
        expect( scope.relatedAlbums[0].name ).toEqual('Rooster Illusion');
    });

    it('On Load Page list of albums should have 1 album', function () {
        expect( scope.allAlbumsList.length ).toBe(1);
    });

    it('On Load Page list of albums should have 1 album', function () {
        expect( scope.allAlbumsList.length ).toBe(1);
    });

    it('On Load Page list of albums: Rooster Illusion ', function () {
        expect( scope.allAlbumsList[0].name ).toEqual('Rooster Illusion');
    });

});
