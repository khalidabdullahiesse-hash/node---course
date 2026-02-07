import yargs from 'yargs'

yargs.command({
    command: 'add',
    describe: 'Add new item',
    builder: {
        title: {
            describe: 'Title of note',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        console.log('Title:', argv.title)
    }
})

yargs.parse()

module.exports