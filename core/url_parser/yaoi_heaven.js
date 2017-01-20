/*
	Parser for: www.yaoihavenreborn.com
*/
const domain = "https://www.yaoihavenreborn.com";

exports.parse = function(html_src){
	try{
		var titleRegex = /<title>.*?<\/title>/i
		var bodyRegex = /<div\s+class="panel-body">[\S\s]*?<\/div>/i;
		var imgRegex = /src="(.*?)"/gi;
		
		var title = html_src.match(titleRegex);
		var body = html_src.match(bodyRegex);
		
		title = title.toString().replace(/(<(\/*)title>)|(\|.*)/gi,'').trim();
		
		var pics = body
			.toString()
			.match(imgRegex)
			.map(function(str){
				return domain + str.replace(/(src=|\")/ig,'');
			});
		
		return {
			"title" : title,
			"pages" : pics
		};
	}catch(err){
		return null;
	}	
}