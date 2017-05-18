#!/usr/bin/env node

const util = require('util');
const exec = require('child_process').exec;

let args = process.argv;

function puts(error, stdout, stderr) {
	util.puts(stdout);
}

const USAGE = '\nbbb Usage: \n\n' +
    '\tpush <message>: Commits with message and pushes to GitHub to selected branch\n' +
    '\tinstall <module1> <module2> ...: Installs module[s] from npm using SAVE flag\n' +
	'\t run: Runs meteor and react-native ios\n';

function printUsageAndExit() {
    util.puts(USAGE);
    process.exit(0);
}

if(args.length == 2) {
    printUsageAndExit();
}

switch (args[2]) {
	case 'push':
		{
            if(args[3] === null) {
                printUsageAndExit();
            }
			let message = args[3];
			exec(`git commit -m ${message}`);
			exec('git push');
			util.puts('Done');
		}
        break;
    case 'install':
        {
            if(args.length === 3) {
                printUsageAndExit();
            }
            let modules = [];
            for(let i = 3; i < args.length; i++) {
                modules.push(args[i]);
            }
            exec(`npm install --save ${modules.join(' ')}`);
			util.puts('Done');
        }
		break;
	case 'run':
		exec('cd RNApp && react-native run-ios');
		util.puts('React-native running, starting meteor...');
		exec('cd MeteorApp && meteor');
		util.puts('Done');
		break;
}
