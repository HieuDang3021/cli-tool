const chalk = require('chalk');
const { cosmiconfigSync } = require('cosmiconfig');
const configLoader = cosmiconfigSync('tool');
const schema = require('./schema.json');
const Ajv = require('ajv').default;
const ajv = new Ajv();

module.exports = function getConfig() {
	const result = configLoader.search(process.cwd());
	if (!result) {
		console.log(chalk.yellow('Could not find the configuration, using default.'));
		return { port: 1234 }
		
	} else {
		const isValid = ajv.validate(schema, result.config);
		if (!isValid) {
			console.log(chalk.yellow('Invalid configuration provided!'));
			console.log();
			console.log(ajv.errors.map((error) =>`${error.instancePath}: ${error.message}`).join('\n'));
			process.exit(1);
		}
		console.log('Found this configuration', result.config);
		return result.config;
	}
}
