import fs from "fs";
import chalk from "chalk";
import _ from "lodash";

// Load notes
export const loadNotes = () => {
  try {
    const dataBuffer = fs.readFileSync("notes.json");
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (e) {
    return [];
  }
};

// Save notes
export const saveNotes = (notes) => {
  const dataJSON = JSON.stringify(notes, null, 2);
  fs.writeFileSync("notes.json", dataJSON);
};

// Add note
export const addNote = (title, body) => {
  const notes = loadNotes();
  const duplicate = notes.find((note) => note.title === title);

  if (!duplicate) {
    notes.push({ title, body });
    saveNotes(notes);
    console.log(chalk.green.bold("Note added successfully"));
  } else {
    console.log(chalk.red.bold("Note title already exists"));
  }
};

// Remove note
export const removeNote = (title) => {
  const notes = loadNotes();
  const notesToKeep = notes.filter(function (note) {
    return note.title !== title;
  });
  if (notes > notesToKeep) {
    console.log(chalk.bgGreen.bold("Note Removed successfully"));
  } else {
    console.log(chalk.bgRed.bold("Note title Not found"));
  }
  saveNotes(notesToKeep);
};

export const listingNotes = function () {
  const notes = loadNotes();

  notes.forEach((note) => {
    console.log(
      chalk.bold.italic.cyan(note.title),
      chalk.bold.italic.bgCyanBright(note.body),
    );
  });
};
