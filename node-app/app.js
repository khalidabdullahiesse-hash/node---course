import chalk from 'chalk';
import yargs, { argv } from 'yargs';
import { hideBin } from 'yargs/helpers';
import note from './note.js';
import { addNote } from './notes';



// Initialize yargs instance
const yargsInstance = yargs(hideBin(process.argv));

// Function to handle the interval counting
function startCounter(limit = 5) {
    let count = 1;

    const intervalId = setInterval(() => {
        console.log(count);
        count++;

        // Stop after reaching the limit
        if (count > limit) {
            clearInterval(intervalId);
            console.log(chalk.blue.bold("Finished counting!"));
        }
    }, 500);
}
function listNames(){

    const names = ["khalid","siciid","Cumar","Asma"]

    console.log(chalk.bold.blue(names[0]))
    console.log(chalk.bold.red(names[1]))
    console.log(chalk.bold.green(names[2]))
    console.log(chalk.bold.black.bgWhite(names[3]))


}
// Define the "add" command
yargsInstance.command({
    command: "add",
    describe: "Add a new note",
    builder:{
        title:{
            describe:"adding note",
            demandOption: true,
            type: "string",
        },
        body:{
            describe:"is the inside in the Note",
            demandOption:true,
            type:"string",
        }
    },
    handler: (yargsInstance) => {
        addNote(argv.title, argv.body)
    }
});


yargsInstance.command({
    command: "List",
    describe: "listing note",
    handler: () => {
        listNames();
        console.log(chalk.bold.green("Note successfully added to your code"));
        startCounter(); // Start the counter
     }
});

yargsInstance.command({
    command: "Read",
    describe: "Reading note",
    handler: () => {
        console.log(chalk.bold.green("Note Reading to your code"));
        startCounter(); // Start the counter
     }
});

// Parse the command-line arguments
yargsInstance.parse();