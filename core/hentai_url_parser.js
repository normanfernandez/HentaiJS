const yaoiHeaven = require("./url_parser/yaoi_heaven");
const request = require('request'); 
const doujin_downloader = require('./doujin_downloader');

function parseHentaiUrl(doujin_url){
	var src = request(doujin_url);
	var doujin = yaoiHeaven.parse(src);
	if(!doujin)
		doujin_downloader.doujinDownloader(doujin);
	else
		console.log('VAINA NULL!');
}

parseHentaiUrl("https://www.yaoihavenreborn.com/doujinshi/hacka-doll-otokonoko-tachi-no-yasen");