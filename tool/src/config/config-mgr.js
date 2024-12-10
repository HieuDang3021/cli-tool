const chalk = require('chalk');
const { cosmiconfigSync } = require('cosmiconfig');
const configLoader = cosmiconfigSync('tool');

module.exports = function getConfig() {
	const result = configLoader.search(process.cwd());
	if (!result) {
		console.log(chalk.yellow('Could not find the configuration, using default.'));
		return { port: 1234 }
		
	} else {
		console.log('Found this configuration', result.config);
		return result.config;
	}
}
