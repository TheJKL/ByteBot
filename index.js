const fs = require('fs');
const Discord = require("discord.js");
const { prefix, token, mongoURL } = require('./config.json');

const MongoClient = require('mongodb').MongoClient;
const mongoClient = new MongoClient(mongoURL);
exports.mongoClient = mongoClient;

const client = new Discord.Client();
client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
console.log(commandFiles);
for(const file of commandFiles) {
	const command = require(`./commands/${file}`);
	client.commands.set(command.name, command);
}

client.once('ready', () => {
	console.log('ready');
});

client.on('message', message => {
	if (!message.content.startsWith(prefix) || message.author.bot) return;

	const args = message.content.slice(prefix.length).trim().split(/ +/);
	const command = args.shift().toLowerCase();

	if (!client.commands.has(command)) return;

	try {
		client.commands.get(command).execute(message,args);
	} catch (error) {
		console.log(error);
		message.reply('Error in command execution.')
	}
});

client.login(token);
