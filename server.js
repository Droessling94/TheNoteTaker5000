const express = require('express');
// path is required for redirecting to different HTML pages with path.join
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3001;

//================API ROUTE================//
const api = require('./routes/index.js')
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use ('/api', api);


//===========STATIC ROUTE FOR HTML===========//
app.use(express.static('public'));

//===========HOME ROUTE FOR HTML===========//
app.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/index.html'))
);

//===========NOTES ROUTE FOR HTML===========//
app.get('/notes', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/notes.html'))
);

app.listen(PORT, () =>
  console.log(`Listening for requests on port ${PORT}! 🏎️`)
);