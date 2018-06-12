const fs = require('fs');

module.exports = function(filename) {
	fs.readFile('./' + filename, 'utf8', function read(err, data) {
		if (err) {
			throw err;
		}
		console.log(data);
		process.stdout.write('\nprompt > ');
	});
};
