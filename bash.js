// process.stdout.write('prompt > ');

// process.stdin.on('data', data => {
// 	const cmd = data.toString().trim();

// 	if (cmd === 'pwd') {
// 		process.stdout.write(__dirname + '\n');
// 	}

// 	process.stdout.write('You typed: ' + cmd);
// 	process.stdout.write('\nprompt > ');
// });

const pwdCall = require('./pwd.js');
const lsCall = require('./ls.js');
const catCall = require('./cat.js');
const cmdArray = ['pwd', 'ls', 'cat'];

process.stdout.write('prompt > ');
let command = process.stdin.on('data', data => {
	command = data
		.toString()
		.trim()
		.split(' ');

	if (command[0] === 'pwd') {
		pwdCall();
	}
	if (command[0] === 'ls') {
		lsCall();
	}
	if (command[0] === 'cat') {
		catCall(command[1]);
	}
	if (cmdArray.indexOf(command[0]) < 0) {
		process.stdout.write('prompt > ');
	}
});
