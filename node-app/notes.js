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

  const duplicate = notes.find(note => note.title === title);

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

  const filteredNotes = _.filter(notes, note => note.title !== title);

  if (notes.length !== filteredNotes.length) {
    saveNotes(filteredNotes);
    console.log(chalk.green.bold("Note removed successfully"));
  } else {
    console.log(chalk.red.bold("Note not found"));
  }
};
