const notesRouter = require('express').Router();
const { log } = require('console');
const fs = require('fs')

const readAndAppend = (content, file) => {
  fs.readFile(file, 'utf8', (err, data) => {
    if (err) {
      console.error(err);
    } else {
      const parsedData = JSON.parse(data);
      parsedData.push(content);
      writeToFile(file, parsedData);
    }
  });
};
const writeToFile = (destination, content) =>
  fs.writeFile(destination, JSON.stringify(content, null, 4), (err) =>
    err ? console.error(err) : console.info(`\nData written to ${destination}`)
  );

  function Note(title, text) {
    this.title = title;
    this.text = test;
 
  };

notesRouter.get('/', (req, res) =>{
 let dbRaw = fs.readFileSync('./db/db.json', 'utf8')
 let dbJson = JSON.parse(dbRaw)

 res.json(dbJson)
 console.log(dbJson);

})

// notesRouter.post('/', (req, res) =>{
//   console.dir(req.body + " this is the req body");
//   console.log(req.body);

//   const { noteTitle, noteText} = req.body;
//   if(req.body){
//     const newNote = {
//       noteTitle,
//       noteText,
//     };
//     console.log(newNote);
//     readAndAppend(newNote, './db/db.json')
//     res.json('note added success')

//   }else {
//     res.error('error')
//   }
// })

notesRouter.post('/', (req, res) => {
  console.log(req.body);
  if (req.body) {
    const newNote = {
      "title": req.body.title,
      "text": req.body.text,
    };

    readAndAppend(newNote, './db/db.json');
    res.json(`Tip added successfully 🚀`);
  } else {
    res.error('Error in adding tip');
  }
});




module.exports = notesRouter;