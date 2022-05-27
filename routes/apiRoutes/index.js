//REQUIRE
const router = require("express").Router();

const fs = require('fs');
const path = require('path');
const notes = require('../../db/db');
let allNotes = require("../../db/db.json");

//ID - UNIQUE VALUES
const { v4: uuidv4 } = require('uuid');

//POST
router.post("/notes", (req, res) => {
  const note = req.body;

  //creating ID for each note
  note.id = uuidv4();
  allNotes.push(note);

  writeNote();

  //adds to left side
  res.json(allNotes);
});

//GET
router.get("/notes", (req, res) => {
  let results = allNotes;
  res.json(results);
});

//DELETE
router.delete("/notes/:id", function(req, res) {
    notes.splice(req.params.id, 1);
    updateDb();
    console.log("Note "+req.params.id+" had been deleted.");
});

//write note Function - to write notes
function writeNote(note) {

  fs.writeFile(
    path.join(__dirname, "../../db/db.json"),
    JSON.stringify(allNotes, null, 2),
    () => {
      console.log("New notes added.");
    }

  )
}

module.exports = router;