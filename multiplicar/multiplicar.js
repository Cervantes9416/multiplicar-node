const fs = require('fs');
const colors = require('colors');

//INICIO LOGICA DE PROGRAMACION
let listarTabla = (base, limite) => {

    console.log('=================='.green)
    console.log(`TABLA DE ${ base }`.green)
    console.log('=================='.green)

    for (let i = 1; i <= limite; i++) {
        console.log(`${base} * ${i} = ${base * i}`)
    }
}

let crearArchivo = (base, limite) => {
    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject(`El valor introducido ${base} no es un numero`.red);
            return;
        }

        let data = '';

        for (let i = 1; i <= limite; i++) {
            data += `${base} * ${i} = ${base * i}\n`;
        }

        fs.writeFile(`tablas/table-${base}.txt`, data, (err) => {
            if (err)
                reject(err);
            else
                resolve(`El archivo tabla-${base} a sido creado`.yellow);
        });
    });
}

module.exports = {
    crearArchivo,
    listarTabla
}