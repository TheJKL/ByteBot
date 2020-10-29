module.exports = {
	name: 'join',
	description: 'Join voice channel of user.',
	async execute(message,args) {
		const opus = await require('@discordjs/opus');
		if(message.guild.voice){
			message.channel.send('I\'m already in a channel.');
		} else if (message.member.voice.channel){
			const connection = await message.member.voice.channel.join();	
		} else {
			message.channel.send("You must be in a voice channel to do this.")
		}
	},
};
