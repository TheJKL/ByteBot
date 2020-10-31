const control = require('../soundController.js');
const opus = require('@discordjs/opus');

module.exports = {
	name: 'join',
	description: 'Join voice channel of user.',
	async execute(message,args) {
		if(message.guild.voice && message.guild.voice.channelID){
			console.log(message.guild.voice.channelID);
			message.channel.send('I\'m already in a channel.');
		} else if (message.member.voice.channel){
			const connection = await message.member.voice.channel.join();	
			control.execute(message,args,connection);
		} else {
			message.channel.send("You must be in a voice channel to do this.")
		}
	},
};
