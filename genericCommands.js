const Discord = require('discord.js');

exports.help = function(prefix){
	const attachment = new Discord.MessageAttachment('./img/guraart.jpg');
	var help_msg = new Discord.MessageEmbed()
		.setColor(`#006994`)
		.attachFiles(attachment)
		.setThumbnail(`attachment://guraart.jpg`)
		.setTitle(`GuraBot Helper!`)
		.setDescription(`This bot was made by a humble shrimp. Please support Gawr Gura!`)
		.addField(	`Commands`, `
					${prefix}GuraText 	(${prefix}gt): Reply you with an iconic Gura quote;
					${prefix}GuraAudio 	(${prefix}ga): Gura joins the vc, she has something to say;
					${prefix}GuraSing 	(${prefix}gs): Gura likes to sing, it's Karaoke Shark time!;
					${prefix}GuraFacts	(${prefix}gf): Are you ready for some random ocean facts?;
					${prefix}GuraClip	(${prefix}gc): Have fun with one of Gura's best moments;
					${prefix}GuraPics	(${prefix}gp): Cute pics of best shork;
					${prefix}GuraBooru	(${prefix}gb): Retrieved more pics from safebooru!;
					${prefix}SetChannel	(${prefix}sc): Set this channel to receive notifications;
					${prefix}NextLive	(${prefix}nl): Get info on Gura's next livestream!;`)
	return help_msg;
}