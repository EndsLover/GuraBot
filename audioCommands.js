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
	"24_Hour_Cinderella.mp3",
	"A_Cruel_Angels_Thesis.mp3",
	"A_Kiss_From_The_Rose_Seal.mp3",
	"Ai_no_Uta.mp3",
	"All_Star.mp3",
	"Baka_Mitai.mp3",
	"Big_Iron.mp3",
	"Bloody_Stream.mp3",
	"Bubbly.mp3",
	"Can't_Help_Falling_In_Love.mp3",
	"Can't_Take_My_Eyes_Off_You.mp3",
	"Chiisana_Boukensha.mp3",
	"Country_Roads.mp3",
	"Departure.mp3",
	"Dragon_Night.mp3",
	"Fly_me_to_the_Moon.mp3",
	"Fuyu_Biyori.mp3",
	"Garota_de_Ipanema.mp3",
	"Gurenge.mp3",
	"Hakuna_Matata.mp3",
	"I_See_The_Light.mp3",
	"It's_Beginning_To Look_A_Lot_Like_Christmas.mp3",
	"Judgement.mp3",
	"Ke_Sera_Sera.mp3",
	"Koi.mp3",
	"La_Vida_Loca.mp3",
	"Mousou_Express.mp3",
	"Odoroyo_Fish.mp3",
	"Ouchi_ni_Kaeritai.mp3",
	"Paradise.mp3",
	"Plastic_Love.mp3",
	"Promise_of_the_World.mp3",
	"Renai_Circulation.mp3",
	"Ride_On_Time.mp3",
	"Sorairo_Days(Cally_Synced_Version).mp3",
	"Sorairo_Days.mp3",
	"Stay_With_Me.mp3",
	"Sunday_Morning.mp3",
	"The_Moon_Song.mp3",
	"Tonight.mp3",
	"YMCA.mp3",
	"You_Got_a_Friend_in_Me.mp3"
	];
	
const senzawa_music = [
	"Bitch_Lasagnya.mp3",
	"Country_Roads.mp3",
	"CREEPER_aw_man.mp3",
	"Crunchy_Roll.mp3",
	"Cups.mp3",
	"I_Wanna_be_a_Cowboy.mp3",
	"Kiss_yo_Homies.mp3",
	"Oki_Doki_Boomer.mp3",
	"Old_Town_Road.mp3",
	"Padoru_Padoru.mp3",
	"PAPA_TUTU_WAWA.mp3",
	"Somewhere_Beyond_the_Sea.mp3",
	"SpOwOky_OwOky_Pumpkin.mp3",
	"The_Senpai_Song.mp3"
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
			var i = 1;
			var help_msg = new Discord.MessageEmbed()
				.setColor(`#006994`)
				.setTitle(`What do you want me to sing?`)
				.setDescription(`	${command} ${i++} = 24_Hour_Cinderella
									${command} ${i++} = A Cruel Angel Thesis
									${command} ${i++} = A Kiss From The Rose Seal
									${command} ${i++} = Ai no Uta
									${command} ${i++} = All Star
									${command} ${i++} = Baka Mitai
									${command} ${i++} = Big_Iron
									${command} ${i++} = Bloody Stream
									${command} ${i++} = Bubbly
									${command} ${i++} = Can't Help Falling In Love
									${command} ${i++} = Can't Take My Eyes Off You
									${command} ${i++} = Chiisana Boukensha
									${command} ${i++} = Country Roads
									${command} ${i++} = Departure
									${command} ${i++} = Dragon Night
									${command} ${i++} = Fly me to the Moon
									${command} ${i++} = Fuyu Biyori
									${command} ${i++} = Garota de Ipanema
									${command} ${i++} = Gurenge
									${command} ${i++} = Hakuna Matata
									${command} ${i++} = I See The Light
									${command} ${i++} = It's Beginning to Look a Lot Like Christmas
									${command} ${i++} = Judgement
									${command} ${i++} = Ke Sera Sera
									${command} ${i++} = Koi
									${command} ${i++} = La Vida Loca
									${command} ${i++} = Mousou Express
									${command} ${i++} = Odoroyo Fish
									${command} ${i++} = Ouchi ni Kaeritai
									${command} ${i++} = Paradise
									${command} ${i++} = Plastic Love
									${command} ${i++} = Promise of the World
									${command} ${i++} = Renai Circulation
									${command} ${i++} = Ride on Time
									${command} ${i++} = Sorairo Days (Synced with Calli)
									${command} ${i++} = Sorairo Days
									${command} ${i++} = Stay With Me
									${command} ${i++} = Sunday Morning
									${command} ${i++} = The Moon Song
									${command} ${i++} = Tonight
									${command} ${i++} = YMCA
									${command} ${i++} = You Got a Friend in Me
									${command} 00 = Random`)
			return message.channel.send(help_msg);
		}
		
		const connection = await voice_channel.join();
		var dispatcher;
		
		if(arg > 0 && arg <= music.length){
			dispatcher = connection.play(`./music/${music[arg-1]}`);
		} else if(arg == 0) {
			console.log(0);
			dispatcher = connection.play(`./music/${music[Math.floor(Math.random() * music.length)]}`);
		} else {
			message.reply("I don't know this one");
		}
		
		if(dispatcher != null && dispatcher != undefined){
			dispatcher.on('finish', () => {
				dispatcher.destroy();
				voice_channel.leave();
			});
		}
    }
}

exports.senzawasing = async function(message, arg, command){
	const voice_channel = message.member.voice.channel;
	
    if(validate(message)){
		if(arg == undefined || arg == ""){
			var help_msg = new Discord.MessageEmbed()
				.setColor(`#006994`)
				.setTitle(`So, i see you dug up my dark past, what do you want me to sing?`)
				.setDescription(`	${command} 01 = Bitch Lasagnya
									${command} 02 = Country Roads
									${command} 03 = CREEPER aw man
									${command} 04 = Crunchy Roll
									${command} 05 = Cups
									${command} 06 = I Wanna Be a Cowboy
									${command} 07 = Kiss yo Holmies
									${command} 08 = Oki Doki Boomer
									${command} 09 = Old Town Road
									${command} 10 = Padoru Padoru
									${command} 11 = PAPA TUTU WAWA
									${command} 12 = Somewhere Beyond The Sea
									${command} 13 = SpOwOky OwOky Pumpkin
									${command} 14 = The Senpai Song
									${command} 00 = Random`)
			return message.channel.send(help_msg);
		}
		
		const connection = await voice_channel.join();
		var dispatcher;
		
		if(arg > 0 && arg <= senzawa_music.length){
			dispatcher = connection.play(`./music/senzawa/${senzawa_music[arg-1]}`);
		} else if(arg == 0) {
			console.log(0);
			dispatcher = connection.play(`./music/senzawa/${senzawa_music[Math.floor(Math.random() * senzawa_music.length)]}`);
		} else {
			message.reply("I don't know this one");
		}
		
		if(dispatcher != null && dispatcher != undefined){
			dispatcher.on('finish', () => {
				dispatcher.destroy();
				voice_channel.leave();
			});
		}
    }
}