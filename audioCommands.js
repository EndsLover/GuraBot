const Discord = require('discord.js');

const sfx = [
	"a.mp3",
	"electroshark.mp3",
	"iloveyou.mp3",
	"lewdshark.mp3",
	"loveprofessing.mp3",
	"morning.mp3",
	"ruwinning.mp3",
	"sadshark.mp3",
	"shaak.mp3",
	"shrimp.mp3"
	];
	
const music = [
	"A_Cruel_Angel_Thesis.mp3",
	"Baka_Mitai.mp3",
	"Bloody_Stream.mp3",
	"Chiisana_Boukensha.mp3",
	"Departure.mp3",
	"Dragon_Night.mp3",
	"Fly_me_to_the_Moon.mp3",
	"Gurenge.mp3",
	"Judgement.mp3",
	"Ke_Sera_Sera.mp3",
	"Koi.mp3",
	"Mousou_Express.mp3",
	"Odoroyo_Fish.mp3",
	"Promise_of_the_World.mp3",
	"Ride_On_Time.mp3"
	];

function validate(message){
	const voice_channel = message.member.voice.channel;
	
    if (voice_channel) {
		const permissions = voice_channel.permissionsFor(message.client.user);
		if (!permissions.has("CONNECT") || !permissions.has("SPEAK")) {
			message.reply("I need the permissions to join and speak in your voice channel!");
			return false;
		} else {
			return true;
		}
	} else {
		message.reply('You need to join a voice channel first!');
		return false;
	}
}

exports.gura = async function(message, arg, command){
	const voice_channel = message.member.voice.channel;
	
	if(validate(message)){
		if(arg == undefined || arg == ""){
			var help_msg = new Discord.MessageEmbed()
				.setColor(`#006994`)
				.setTitle(`What do you want me to say?`)
				.setDescription(`	${command} a
									${command} electroshark
									${command} iloveyou
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
			case "a": 				dispatcher = connection.play(`./sfx/${sfx[0]}`); break;
			case "a": 				dispatcher = connection.play(`./sfx/${sfx[1]}`); break;
			case "a": 				dispatcher = connection.play(`./sfx/${sfx[2]}`); break;
			case "lewdshark": 		dispatcher = connection.play(`./sfx/${sfx[3]}`); break;
			case "loveprofessing": 	dispatcher = connection.play(`./sfx/${sfx[4]}`); break;
			case "morning": 		dispatcher = connection.play(`./sfx/${sfx[5]}`); break;
			case "areyouwinning": 	dispatcher = connection.play(`./sfx/${sfx[6]}`); break;
			case "sadshark": 		dispatcher = connection.play(`./sfx/${sfx[7]}`); break;
			case "shrimp": 			dispatcher = connection.play(`./sfx/${sfx[8]}`); break;
			case "shaak": 			dispatcher = connection.play(`./sfx/${sfx[9]}`); break;
			case "random": 			dispatcher = connection.play(`./sfx/${sfx[Math.floor(Math.random() * sfx.length)]}`); break;
			default: 				message.reply("I don't know this one");
		}
		
		dispatcher.on('finish', () => {
			dispatcher.destroy();
			voice_channel.leave();
		});
    }
}

exports.sing = async function(message, arg, command){
	const voice_channel = message.member.voice.channel;
	
    if(validate(message)){
		if(arg == undefined || arg == ""){
			var help_msg = new Discord.MessageEmbed()
				.setColor(`#006994`)
				.setTitle(`What do you want me to sing?`)
				.setDescription(`	${command} 01 = A Cruel Angel Thesis
									${command} 02 = Baka Mitai
									${command} 03 = Bloody Stream
									${command} 04 = Chiisana Boukensha
									${command} 05 = Departure
									${command} 06 = Dragon Night
									${command} 07 = Fly me to the Moon
									${command} 08 = Gurenge
									${command} 09 = Judgement
									${command} 10 = Ke Sera Sera
									${command} 11 = Koi
									${command} 12 = Mousou Express
									${command} 13 = Odoroyo Fish
									${command} 14 = Promise of the World
									${command} 15 = Ride on Time
									${command} 00 = Random`)
			return message.channel.send(help_msg);
		}
		
		const connection = await voice_channel.join();
		var dispatcher;
		switch(arg){
			case "01": 	dispatcher = connection.play(`./music/${music[0]}`); break;
			case "02": 	dispatcher = connection.play(`./music/${music[1]}`); break;
			case "03": 	dispatcher = connection.play(`./music/${music[2]}`); break;
			case "04": 	dispatcher = connection.play(`./music/${music[3]}`); break;
			case "05": 	dispatcher = connection.play(`./music/${music[4]}`); break;
			case "06": 	dispatcher = connection.play(`./music/${music[5]}`); break;
			case "07": 	dispatcher = connection.play(`./music/${music[6]}`); break;
			case "08": 	dispatcher = connection.play(`./music/${music[7]}`); break;
			case "09": 	dispatcher = connection.play(`./music/${music[8]}`); break;
			case "10": 	dispatcher = connection.play(`./music/${music[9]}`); break;
			case "11": 	dispatcher = connection.play(`./music/${music[10]}`); break;
			case "12": 	dispatcher = connection.play(`./music/${music[11]}`); break;
			case "13": 	dispatcher = connection.play(`./music/${music[12]}`); break;
			case "14": 	dispatcher = connection.play(`./music/${music[13]}`); break;
			case "15": 	dispatcher = connection.play(`./music/${music[14]}`); break;
			case "00": 	dispatcher = connection.play(`./music/${music[Math.floor(Math.random() * music.length)]}`); break;
			default: 	message.reply("I don't know this one");
		}
		
		dispatcher.on('finish', () => {
			dispatcher.destroy();
			voice_channel.leave();
		});
    }
}