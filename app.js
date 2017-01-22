const html_fetch =  require('./core/html_fetch');
const yaoi_heaven = require('./core/url_parser/yaoi_heaven');
const doujin_downloader = require('./core/doujin_downloader');

var src = html_fetch.getHtml("https://www.yaoihavenreborn.com/doujinshi/giniro-nexus" ,
	function(src){
            var doujin = yaoi_heaven.parse(src);
            doujin_downloader.download(doujin);
	}
);