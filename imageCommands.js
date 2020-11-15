const Discord = require('discord.js');
const https = require('https');

exports.gura = function(){
	const pic = `./img/random/${Math.floor(Math.random() * 50)}.jpg`
	
	return pic;
}

exports.booru = function() {
	return new Promise((resolve, reject) => {
		let data = '';
		let result='';
		let slicedData='';
		//let pageNumber=Math.floor(Math.random() * 10);
		let offset=Math.floor(Math.random() * 30);
		https.get('https://safebooru.org/index.php?page=dapi&s=post&q=index&tags=gawr_gura&json=1&limit=30', (resp) => {
			// A chunk of data has been recieved.
			resp.on('data', (chunk) => {
				data += chunk;
			});
			// The whole response has been received. Print out the result.
			resp.on('end', () => {
			try {
				//slicedData=data.slice(1,-1);
				result=JSON.parse(data);
				resolve(result[offset]);
			} catch (e) {
				reject(e.message);
			}
			});
		}).on("error", (err) => {
			console.log("Error: " + err.message);
		});
	});
}