//LIBRERIAS - EQUIVALENTE A USING
const { listarTabla, crearArchivo } = require('./multiplicar/multiplicar');
const { argv } = require('./config/yargs')
const colors = require('colors');

//console.log(argv);

let comando = argv._[0];

switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite);
        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(archivo))
            .catch(err => console.log(err));
        break;
    default:
        console.log('COMANDO NO RECONOCIDO');
}