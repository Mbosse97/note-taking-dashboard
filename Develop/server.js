// check if link between pages is broken
// create route to notes pages with get request
// create get and post requests on the notes in notes page

const express = require('express');
const path = require('path')
const fs = require('fs')


const PORT = 3001;

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use(express.static('public'));

app.get('/notes', (req,res) => 
    res.sendFile(path.join(__dirname,'/public/notes.html'))
);

app.get('*', (req,res) => 
    res.sendFile(path.join(__dirname,'/public/index.html'))
);

