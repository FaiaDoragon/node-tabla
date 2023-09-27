const argv = require('yargs')
                .option('b', {
                    alias:'base',
                    type: 'number',
                    demandOption: true,
                    default: false
                })
                .option('l', {
                    alias:'limit',
                    type: 'boolean',
                    demandOption: false
                })
                .option('h', {
                    alias:'hasta',
                    type: 'number',
                    default: 10
                })
                .check((argv, options) => {
                    if (isNaN(argv.b)) {
                        throw `LA BASE TIENE QUE SER UN NUMERO`
                    } 
                    return true
                })
                .argv

module.exports = {
    argv
}