const prefix = require('./config.json').prefix;

module.exports = {
	async execute(message,args,connection) {
		console.log('SoundCon Execute');
		const client = message.client;

		client.on('message', message => {
			if (!message.content.startsWith(prefix) || message.author.bot) return;
			const args = message.content.slice(prefix.length).trim().split(/ +/);
			const command = args.shift().toLowerCase();

			switch(command) {
				case "play":
					connection.play('./sounds/Bundy.wav');
					console.log('SoundCon Play');
					break;
				case "leave":
					message.guild.voice.channel.leave();
				default:
					break;
			}
		});
	}
}
