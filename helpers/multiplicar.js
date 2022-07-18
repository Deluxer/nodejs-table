const fs = require('fs');
const colors = require('colors');

const createFile = async( base = 5, listado = false, hasta = 10 ) => {
    
    let salida, consola = '';
    
    for (let i = 1; i <= hasta; i++) {
        salida += `${ base } x ${ i } = ${ base * i}\n`;
        consola += `${ base } ${ 'x'.green } ${ i } ${ '='.green } ${ base * i}\n`;
    }
    if(listado) {
        console.log(salida);
    }

    fs.writeFileSync( `./output/tabla-${ base }.txt`, salida);
    
    try {
        return `table-${ base }.txt`.underline;
    } catch(err) {
        return err;
    }
}

module.exports = {
    createFile
}