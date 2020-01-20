const express = require('express');
const app = express();
var fs = require('fs');

async function startpage(req, res, next) {
    res.send('Hello World');
}

var startpage1 = (req, res, next) => {
    res.send('Hello world');
}
function readfile(filename) {
    var json = JSON.parse(fs.readFileSync(filename, 'utf8'));
    return json;
 }

app.get('/', (req, res, next) => {
    res.send('Hello world');
});

app.get('/getData', (req, res, next) => {
    var json = readfile('jsondata.json');
    res.send(json);
    
})

function consoling(){
    console.log("Litening!!");
}
app.listen(4000, consoling);