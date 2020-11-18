const client = require('./index.js').mongoClient;
const dbName = "ByteBot";

function getName(preName,n = 0) {
	client.connect(function(err) {
		const db = client.db(dbName);
		const collection = db.collection('files');
		var name = preName + `-${n}`

		if (!collection.find({'name':preName})){
			return preName;
		} else {
			return getName(preName,1);
		}
	})
}

module.exports.getName = getName;
