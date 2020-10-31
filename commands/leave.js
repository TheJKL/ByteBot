module.exports = {
	name: 'leavedeprecated',
	description: 'Make bot leave current channel.',
	execute(message,args) {
		if (message.guild.voice){
			message.guild.voice.channel.leave();
		}
	},
};
