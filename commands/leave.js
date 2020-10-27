module.exports = {
	name: 'leave',
	description: 'Make bot leave current channel.',
	execute(message,args) {
		if (message.member.voice.channel){
			message.member.voice.channel.leave();
		}
	},
};
