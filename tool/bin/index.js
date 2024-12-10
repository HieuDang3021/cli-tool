#!/usr/bin/env node
const arg = require('arg');
const chalk = require('chalk');
const getConfig = require('../src/config/config-mgr');
const start = require('../src/commands/start');

try {
    const args = arg({
        '--start': Boolean,
        '--build': Boolean,
    });
    
    if (args['--start']) {
	const config = getConfig();
	start(config);
    } 
} catch (err) {
    console.log(chalk.yellow(err.message));
    console.log();
    usage();
}

function usage() {
    console.log(
	`${chalk.whiteBright('tool [CMD]')}
	${chalk.greenBright('--start')}\tStart the app
	${chalk.greenBright('--build')}\tBuild the app`
    );
}
