//REQUIRE
const router = require("express").Router();
const fs = require('fs');
const path = require('path');

//ID - UNIQUE VALUES
const { v4: uuidv4 } = require("uuid");
const notes = require('../../db/db');
const { createNewNote, findById, deleteNote } = require('../../notes');

//GET SAVED NOTES in db.json
router.get('/notes', (req, res) => {
    res.json(notes);
});

//CREATE NEW NOTES TO SAVE in db.json
router.post('/notes', (req, res) => {
    req.body.id = uuidv4();
    createNewNote(req.body, notes);
    res.json(req.body);
});

//DELETE NOTE bassed on ID db.json
router.delete('/notes/:id', (req, res) => {
    const note = findById(req.params.id, notes);

    deleteNote(note, notes);
    res.json();
});

module.exports = router;