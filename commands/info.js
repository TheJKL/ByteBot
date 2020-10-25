module.exports = {
	name: 'info',
	description: 'Basic Info about ByteBot.',
	execute(message,args) {
		const Discord = require('discord.js');
		const embed = new Discord.MessageEmbed()
		.setColor('#8215d6')
		.setTitle('ByteBot Info')
		.setURL('https://github.com/TheJKL/ByteBot')
		.setFooter('https://github.com/TheJKL/ByteBot', 'https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png');

		message.channel.send(embed);
	},
};
