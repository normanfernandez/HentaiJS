/**
    Sample source from: http://stackoverflow.com/questions/12740659/downloading-images-with-node-js
 */
const request = require('request');
const fs = require('fs');
const url = require('url');

exports.download = function (doujin) {
    if(!doujin){
        console.log('Error: doujin is null!' );
    }
    
    if(fs.existsSync(doujin.title)){
        console.log('The folder ' + "'" + doujin.title + "'" + ' exists in the current path!');
    } 
    else{
        fs.mkdirSync(doujin.title);
    }
    
    var downloadPage = function (uri, filename, callback) {
        request.head(uri, function (err, res, body) {
            request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
        });
    };
    
    var pad = function(number, paddingSize){
        var result = number.toString();
        while (result.length < (paddingSize || 2)) {
            result = "0" + result;
        };
        return result;
    };
        
    console.log('Doujin: ' + doujin.title);
    var extensionRegex = /\.[\w\W]{3,4}$/i;
    doujin.pages.forEach(
        function(page, index, pages){
            var extension = url.parse(page).path.match(extensionRegex);
            var filename = doujin.title + "/" + pad(index, pages.length.toString().length) + extension;
            downloadPage(page, filename, function(){
                console.log('Done with: ' + page);
            });
        }
    );
    
};