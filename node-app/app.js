import chalk from 'chalk'
import yargs from 'yargs'
import { hideBin } from 'yargs/helpers'
import { addNote } from './notes.js'

const yargsInstance = yargs(hideBin(process.argv))


// ADD COMMAND
yargsInstance.command({
    command: "add",
    describe: "Add a new note",
    builder:{
        title:{
            demandOption:true,
            type:"string"
        },
        body:{
            demandOption:true,
            type:"string"
        }
    },
    handler: (argv) => {
        addNote(argv.title, argv.body)
        console.log(chalk.green.bold("Note Added Successfully"))
    }
})


// LIST COMMAND
yargsInstance.command({
    command: "list",
    describe: "Listing notes",
    handler: () => {
        console.log(chalk.blue.bold("Listing notes..."))
    }
})


// READ COMMAND
yargsInstance.command({
    command: "read",
    describe: "Reading note",
    handler: () => {
        console.log(chalk.yellow.bold("Reading note..."))
    }
})


yargsInstance.parse()
