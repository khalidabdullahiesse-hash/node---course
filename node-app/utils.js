import validator from 'validator'
import chalk from 'chalk'

console.log(chalk.bgCyan('NODE APP'));



const getName = function (name){
    console.log(name + 'Welcome to khalid node Workstation')
}

const getUserEmail = function(email){

    const userValidation = validator.isEmail(email);
    console.log(chalk.red.bold(userValidation));
}
const getUserURL = function(url){
    const userValidation = validator.isURL(url);
    console.log(chalk.red.italic(userValidation));
}

export {getName , getUserEmail, getUserURL};