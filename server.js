const path = require('path')
const fs = require('fs')
const express = require('express')
const app = express();


app.use(express.static(path.join(__dirname, './build')))

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, './build'), 'index.html')
    res.end()
});

app.get('/*', (req, res) => res.status(404).send());


const port = 8080;

app.listen(port, () => {
    console.log('app running at localhost:' + port)
})