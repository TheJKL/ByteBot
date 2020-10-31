const prefix = require('./config.json').prefix;

module.exports = {
	async execute(message,args,connection) {
		console.log('SoundCon Execute');
		const client = message.client;

		client.on('message', message => {
			if (!message.content.startsWith(prefix) || message.author.bot) return;
			const args = message.content.slice(prefix.length).trim().split(/ +/);
			const command = args.shift().toLowerCase();

			const inUserChannel = message.member.voice.channel == message.guild.voice.channel;

			switch(command) {
				case "play":
					if (inUserChannel){
						connection.play('./sounds/Bundy.wav');
						console.log('SoundCon Play');
					} else {
						message.channel.send('You must be in vc with the bot.')
					}
					break;
				case "leave":
					if (inUserChannel){
						message.guild.voice.channel.leave();
						console.log('soundCon Leave');
					} else {
						message.channel.send('You must be in vc with the bot.')
					}
				default:
					break;
			}
		});
	}
}


