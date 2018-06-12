
module.exports = function() {
    
    process.stdout.write('prompt > ');

    process.stdin.on('data', data => {
        const cmd = data.toString().trim();

        if (cmd === 'pwd') {
            process.stdout.write(__dirname + '\n');
        }

        if(cmd === 'ls') {
            lsCall()
        }

        process.stdout.write('You typed: ' + cmd);
    });

}

const lsCall = require('./ls.js')

