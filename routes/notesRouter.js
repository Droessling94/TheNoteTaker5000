const notesRouter = require('express').Router();
const { log } = require('console');
const fs = require('fs')


notesRouter.get('/', (req, res) =>{
 let dbRaw = fs.readFileSync('./db/db.json', 'utf8')
 let dbJson = JSON.parse(dbRaw)

 res.json(dbJson)
 console.log(dbJson);

})




module.exports = notesRouter;