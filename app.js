
const {crearArchivo}= require('./helpers/multiplicar.js');
const { argv } = require('./config/yargs.js')

console.clear();

console.log(argv);

//const base = 2;

crearArchivo(argv.b, argv.l, argv.h)
    .then( nombreArchivo => console.log(nombreArchivo, 'CREADO'))
    .catch( err => console.log(errs));


