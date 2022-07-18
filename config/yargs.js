const argv = require('yargs')
        .option('b', {
            alias: 'base',
            type: 'number',
            demandOption: true,
            describe: 'Base number of multiplication table',
        })
        .option('l', {
            alias: 'list',
            type: 'boolean',
            default: false,
            describe: 'Show table'
        })
        .option('h', {
            alias: 'to',
            type: 'number',
            default: 10,
            describe: 'Miltiplication limit'
        })
        .check( (argv, options) => {
            if ( isNaN(argv.b) ) {
                throw 'The base should be number';
            }
            return true;
        })
        .argv;

module.exports = argv;