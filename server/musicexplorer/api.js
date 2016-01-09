var request = require('request');
var Q = require('q');

function requestMaker(url) {

    var deferred = Q.defer();

    console.log('requestMaker() URLs: ', url);
    request({url: url}, function(error, response, body) {

        var data;

        try{
            data = JSON.parse(body);
        }catch(err){
            error = err;
            data = error;
        };

        if(!error){

            if (response.statusCode === 200) {
                deferred.resolve(data);
            } else {
                deferred.reject(data);
            }

        }else{
            deferred.reject(data);
        }

    });

    return deferred.promise;

}

function getTopTracksByArtist(artistId, country) {

    var url = 'https://api.spotify.com/v1/artists/{ARTIST_ID}/top-tracks?country={COUNTRY}';
    url = url.replace('{ARTIST_ID}', artistId).replace('{COUNTRY}', country);
    return requestMaker(url);

}

function getAlbumsByArtist(artistId) {

    var url = 'https://api.spotify.com/v1/artists/{ARTIST_ID}/albums?album_type=album&limit=50';
    url = url.replace('{ARTIST_ID}', artistId);
    return requestMaker(url);

}

exports.getDataByArtist = function (artistId, country, cb) {

    Q.all([
        getTopTracksByArtist(artistId, country),
        getAlbumsByArtist(artistId)
    ]).then(function (data) {

        var finalData = {
            topTracks: data[0],
            albums: data[1]
        };

        cb(undefined, finalData);

    }, function (err) {
        cb(err);
    });

};

exports.doSearchByArtist = function (searchTerm, cb) {

    var url = 'https://api.spotify.com/v1/search?q={SEARCH_TERM}&type=artist';
    url = url.replace('{SEARCH_TERM}', searchTerm);

    requestMaker(url).then(function (data) {
        cb(undefined, data)
    }, function (err) {
        cb(err);
    });

};
