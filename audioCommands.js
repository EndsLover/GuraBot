const Discord = require('discord.js');

const sfx = [
	"a.mp3",
	"lewdshark.mp3",
	"loveprofessing.mp3",
	"morning.mp3",
	"ruwinning.mp3",
	"sadshark.mp3",
	"shaak.mp3",
	"shrimp.mp3"
	];

exports.gura = async function(message, arg, command){
	const voice_channel = message.member.voice.channel;
	
    if (voice_channel) {
		const permissions = voice_channel.permissionsFor(message.client.user);
		if (!permissions.has("CONNECT") || !permissions.has("SPEAK")) {
			return message.channel.send("I need the permissions to join and speak in your voice channel!");
		}
		if(arg == undefined || arg == ""){
			var help_msg = new Discord.MessageEmbed()
				.setColor(`#006994`)
				.setTitle(`What do you want me to say?`)
				.setDescription(`	${command} a
									${command} lewdshark
									${command} loveprofessing
									${command} morning
									${command} areyouwinning
									${command} sadshark
									${command} shrimp
									${command} shaak
									${command} random`)
			return message.channel.send(help_msg);
		}
		
		const connection = await voice_channel.join();
		var dispatcher;
		switch(arg){
			case "a": 				dispatcher = connection.play(`./sfx/a.mp3`); break;
			case "lewdshark": 		dispatcher = connection.play(`./sfx/lewdshark.mp3`); break;
			case "loveprofessing": 	dispatcher = connection.play(`./sfx/loveprofessing.mp3`); break;
			case "morning": 		dispatcher = connection.play(`./sfx/morning.mp3`); break;
			case "areyouwinning": 	dispatcher = connection.play(`./sfx/ruwinning.mp3`); break;
			case "sadshark": 		dispatcher = connection.play(`./sfx/sadshark.mp3`); break;
			case "shrimp": 			dispatcher = connection.play(`./sfx/shrimp.mp3`); break;
			case "shaak": 			dispatcher = connection.play(`./sfx/shaak.mp3`); break;
			default: 				dispatcher = connection.play(`./sfx/${sfx[Math.floor(Math.random() * sfx.length)]}`);
		}
		
		dispatcher.on('finish', () => {
			dispatcher.destroy();
			voice_channel.leave();
		});
    } else {
		message.reply('You need to join a voice channel first!');
    }
}