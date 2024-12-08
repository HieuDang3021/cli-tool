#!/usr/bin/env node
const arg = require('arg');
const chalk = require('chalk');
const pkgUp = require('pkg-up');

try {
    const args = arg({
        '--start': Boolean,
        '--build': Boolean,
    });
    
    if (args['--start']) {
	// get the package.json file in the installed user interface
	const pkgPath = pkgU.sync({cwd: process.cwd()});
	const pkg = require(pkgPath);
	if (pkg.tool) {
		console.log('Found configuration', pkg.tool);
		// do something with the configuration
	} else  {
		conse.log(chalk.yellow('Could not find the configuration, using default');
		// get the default configuration
	}
        console.log(chalk.bgCyanBright('starting the app'));
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
