const express = require('express');
const app = express();

const fs = require('node:fs');
const data = JSON.parse(fs.readFileSync('./data.json', 'utf-8'));

app.listen(3000);
app.set('view engine', 'ejs');

var svgFile = [];
fs.readdirSync('./images').forEach(fileName => {
    if(fileName.split('.')[1] === 'svg') {
        svgFile[`./images/${fileName}`] = fs.readFileSync(`./images/${fileName}`).toString();
    }
});

app.get('/', (req, res) => {
    res.render('index', { 'jobs': data, 'image': svgFile }); 
});
