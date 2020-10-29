const opus = require('@discordjs/opus');
const control = require('../soundController.js');

module.exports = {
	name: 'play',
	description: 'description of command',
	async execute(message,args) {
		if (message.member.voice.channel && !message.guild.voice){
			const connection = await message.member.voice.channel.join();
			connection.play('./sounds/Bundy.wav');

			control.execute(message,args,connection);
		}
	},
};
