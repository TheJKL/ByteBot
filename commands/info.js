module.exports = {
	name: 'info',
	description: 'Basic Info about ByteBot.',
	execute(message,args) {
		message.channel.send('I am ByteBot.');
	},
};
