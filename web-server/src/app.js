import express from 'express'
import chalk from 'chalk';

const app = express();

app.get('', (req, res) => {
    res.send('Hello express')
})

app.get('/help', (req, res) =>{
    res.send('help page is Here')
})


app.get('/about', (req, res) =>{
    res.send('about page is Here')
})



app.listen(3000, (req, res) =>{
    console.log(chalk.bold.green.bgYellow('The server is up to run'))
})



