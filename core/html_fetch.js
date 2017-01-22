/**
 *	Gets the html source from the url;
 */
const request = require('request');

exports.getHtml = function (url, callback) {
    request(url, function (err, res, body) {
        if (!err) {
            if(callback)
                callback(body);
            return body;
        } else {
            console.log(err);
            return null;
        }
    });
};