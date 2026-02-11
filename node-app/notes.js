import fs from "fs";
import chalk from "chalk";
import { stringify } from "querystring";
import { title } from "process";

// Load notes from file
export const loadNotes = () => {
  try {
    const dataBuffer = fs.readFileSync("note.json");
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (e) {
    return [];
  }
};

// Save notes to file
export const saveNotes = (notes) => {
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync("notes.json", dataJSON);
};

// Add a new note
export const addNote = (title, body) => {
  const notes = loadNotes();
  const duplicate = notes.find(note => note.title === title);

  if (!duplicate) {
    notes.push({ title, body });
    saveNotes(notes);
    console.log(chalk.green.bold("✅ Note added successfully!"));
  } else {
    console.log(chalk.red.bold("❌ Note title already exists!"));
  }
};


const findNote = function(title){
    const dataBuffer = fs.readFileSync('notes.json')
    const dataJSON = dataBuffer.toString();
    const data = JSON.parse(dataJSON);
    if(data.find(note => note.title === title)){
        return true
    } else{
        return false
    }

}

// Delete a note by title
export const removeNote = function(title){
    findNote(title)
    if(title == true){
        notes.filter(title)
        return chalk.bold.green("`the file scusscefully deleted`");
    } else{
        console.log(chalk.bold.red('`the file do not find in the JSON file`'))
    }

}
