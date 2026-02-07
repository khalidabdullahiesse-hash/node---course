

import validator from 'validator'
import chalk from 'chalk';
import isEmail from 'validator/lib/isEmail.js';
import isURL from 'validator/lib/isURL.js';
import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';


console.log(argv)
const argv = yargs(hideBin(process.argv)).parse()
