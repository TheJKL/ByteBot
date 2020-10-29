module.exports = {
	name: 'play',
	description: 'description of command',
	async execute(message,args) {
		const opus = require('@discordjs/opus');
		if (message.member.voice.channel){
			const connection = await message.member.voice.channel.join();
			connection.play('./sounds/Bundy.wav');
		}
	},
};
