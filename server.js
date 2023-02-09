// check if link between pages is broken            DONE
// create route to notes pages with get request         DONE
// create get request to log existing notes on left
// create post request to log new notes on the left when saved 
// create get request when note is clicked to present on right
// create get request from write button to link to notes.html

const express = require('express');
const path = require('path');
const fs = require('fs');
const api = require('./routes/index');
const { readFromFile, readAndAppend } = require('./helpers/fsUtils');

const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use(express.static('public'));

app.use('/api',api);

app.get('/notes', (req,res) => 
    res.sendFile(path.join(__dirname,'/public/notes.html'))
);

app.get('*', (req,res) => 
    res.sendFile(path.join(__dirname,'/public/index.html'))
);

app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);