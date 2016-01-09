var express = require('express');
var API = require('./api');

var router = express.Router();

router.get('/get', function(req, res) {

    //console.log(req);

    var artistId = req.query.artistId;
    var country = req.query.country;

    API.getDataByArtist(artistId, country, function (err, data) {

        if (!err) {
            res.status(200);
            res.json(data);
        } else {
            res.status(500);
            res.json(err);
        }

    });

});

router.get('/search', function(req, res) {

    var searchTerm = req.query.searchTerm;

    API.doSearchByArtist(searchTerm, function (err, data) {

        if (!err) {
            res.status(200);
            res.json(data);
        } else {
            res.status(500);
            res.json(err);
        }

    });

});

module.exports = router;
