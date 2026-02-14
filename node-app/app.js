import yargs from "yargs";
import { hideBin } from "yargs/helpers";
import chalk from "chalk";
import { addNote, removeNote, listingNotes } from "./notes.js";

const yargsInstance = yargs(hideBin(process.argv));

// ADD command
yargsInstance.command({
  command: "add",
  describe: "Add a new note",
  builder: {
    title: { demandOption: true, type: "string" },
    body: { demandOption: true, type: "string" },
  },
  handler: (argv) => addNote(argv.title, argv.body),
});

// DELETE command
yargsInstance.command({
  command: "remove",
  describe: "Delete a note by title",
  builder: { title: { demandOption: true, type: "string" } },
  handler: (argv) => removeNote(argv.title),
});

yargsInstance.command({
  command: "list",
  describe: "listing all notes",
  builder: { title: { demandOption: true, type: "string" } },
  handler: (argv) => listingNotes(argv.title),
});

yargsInstance.command({
  command: "read",
  describe: "reading all notes",
  builder: { title: { demandOption: true, type: "string" } },
  handler: (argv) => listingNotes(argv.title),
});

yargsInstance.parse();
