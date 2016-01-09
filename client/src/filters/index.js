module.exports = function(app) {

    app.filter('humanizeTime', function () {
        return function (data) {
            return moment.duration(parseInt(data||0)).humanize();
        };
    });

};
