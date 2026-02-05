

import * as utils from './utils.js'
import validator from 'validator'
import chalk from 'chalk';
import isEmail from 'validator/lib/isEmail.js';
import isURL from 'validator/lib/isURL.js';

console.log(chalk.bold.red(process.argv));


const email = isEmail("khalidabdullahiisse@gmail.com");
const url = isURL("http://khalid.com")

console.log(url, email)