const fs = require('fs');
const colors = require('colors');

const crearArchivo = async(base, listar = false, hasta) => {

    try {
        
        
        
        let salida = '';

        for (let i = 0; i <= hasta; i++) {
            salida += (`${base} x ${i} = ${ base * i}\n`);
        }

        if (listar) {
            console.log('==================='.green);
            console.log(`   TABLA DEL : ${base}`.green);
            console.log('==================='.green);

           console.log(salida.green); 
        }

        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);

        return `Tabla-${base}.txt`;
    } catch (error) {
        throw error
    }    
}

module.exports = {
    crearArchivo
}