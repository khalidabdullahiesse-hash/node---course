const fs = require('fs');

const book = {
    name:"khalid abdullahi isse",
    planet:"Earth power",
    age:"20"
}
const bookJSON = JSON.stringify(book);

fs.writeFileSync('2-json.json', bookJSON);

const databuffer = fs.readFileSync('2-json.json');
const dataJSON = databuffer.toString();
const data = JSON.parse(dataJSON);
console.log(data.name)