const { boolean } = require('yargs');
const { createFile } = require('./helpers/multiplication');
const argv = require('./config/yargs');


// const [ , ,argv = 'base=5'] = process.argv;
// const [ , base = 5 ] = argv.split('=');

// console.log(process.argv);
// console.log(argv);

console.log(argv)
//const base = 3;
createFile( argv.b, argv.l, argv.h )
.then( fileName => console.log(fileName, 'finished'))
.catch( err => console.log(err));