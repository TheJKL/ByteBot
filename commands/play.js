module.exports = {
	name: 'play',
	description: 'description of command',
	async execute(message,args) {
		if (message.member.voice.channel){
			const connection = await message.member.voice.channel.join();
		}
	},
};
