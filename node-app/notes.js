import chalk from "chalk";
import fs from "fs";

export const getNote = function () {};
export const addNote = function (title, body) {
  const notes = loadNote();
  const duplicateNote = notes.filter(function (note) {
    return note.title === title;
  });

  if (duplicateNote.length === 0) {
    notes.push({
      title: title,
      body: body,
    });
    saveNote(notes);
    console.log(chalk.green.bold("Note Added Successfully"));
  } else {
    console.log(chalk.bold.red("The Note has been taken"));
  }
};

export const saveNote = function (notes) {
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync("note.json", dataJSON);
};
export const loadNote = function () {
  try {
    const databuffer = fs.readFileSync("note.json");
    const dataJSON = databuffer.toString();
    return JSON.parse(dataJSON);
  } catch (e) {
    return [];
  }
};
