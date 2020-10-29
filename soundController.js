const prefix = require('./config.json').prefix;

module.exports = {
	async execute(message,args,connection) {
		const client = message.client;

		client.on('message', message => {
			if (!message.content.startsWith(prefix) || message.author.bot) return;
			const args = message.content.slice(prefix.length).trim().split(/ +/);
			const command = args.shift().toLowerCase();

			switch(command) {
				case "play":
					connection.play('./sounds/Bundy.wav');
					break;
				default:
					break;
			}
		});
	}
}
