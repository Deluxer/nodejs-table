const fs = require('fs');
const colors = require('colors');

const createFile = async( base = 5, list = false, to = 10 ) => {
    
    let output, ShowInConsole = '';
    
    for (let i = 1; i <= to; i++) {
        output += `${ base } x ${ i } = ${ base * i}\n`;
        ShowInConsole += `${ base } ${ 'x'.green } ${ i } ${ '='.green } ${ base * i}\n`;
    }
    if(list) {
        console.log(ShowInConsole);
    }

    fs.writeFileSync( `./output/tabla-${ base }.txt`, output);
    
    try {
        return `table-${ base }.txt`.underline;
    } catch(err) {
        return err;
    }
}

module.exports = {
    createFile
}