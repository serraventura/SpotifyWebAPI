var express = require('express');
var path = require('path');

var musicExplorer = require('./musicexplorer/index');

var app = express();

var server = app.listen(9000, function() {
    console.log('Listening on port %d', server.address().port);
});

// Error Handling
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: err
    });
});

app.use(express.static(path.join(__dirname, '../client/dist'), { maxAge: 0 }));
app.use('/musicexplorer', musicExplorer);

module.exports = app;
