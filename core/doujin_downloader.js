/*
	Sample source from: http://stackoverflow.com/questions/12740659/downloading-images-with-node-js
*/
const request = require('request');

exports.doujinDownloader = function(doujin){
	var download = function(uri, filename, callback){
		request.head(uri, function(err, res, body){

		request(uri).pipe(fs.createWriteStream(filename)).on('close', callback());
	  });
	};
	console.log(JSON.stringify(doujin));
}