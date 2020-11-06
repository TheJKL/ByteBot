const fs = require('fs');
const http = require('http');
const fileExts = require('../config.json').fileExts;

module.exports = {
	name: 'upload',
	description: 'upload the attached sound file',
	execute(message,args) {
		if(!message.attachments.first()) {
			message.channel.send('No file to upload');
			return;
		}
		
		const aURL = message.attachments.first().url;
		var validFileType = false;
		fileExts.forEach(ext =>{
			if(aURL.endsWith('.' + ext)){
				validFileType = true;
			}
		})
		if(!validFileType) {
			message.channel.send('invalid file type')
			return;
		}

		var nameWords;
		if(args.length > 0){
			nameWords = args;
		} else {
			var splitURL = aURL.split("/");
			nameWords = splitURL[splitURL.length - 1].split(/[_.-]+/);
			nameWords.pop();
		}
		var soundname = nameWords.shift();
		nameWords.forEach(word => {
			soundname += "-" + word
		})
		message.channel.send(soundname);
	},
};
