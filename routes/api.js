const express = require('express');
const noteActions = require('../actions/api/noteActions.js');
const router = express.Router()


//get notes
router.get('/notes', noteActions.getAllNotes)

//get specify note
router.get('/notes/:id', noteActions.getNote)

//save note
router.post('/notes', noteActions.saveNote)

//edition note
router.put('/notes/:id', noteActions.updateNote)

//delete note
router.delete('/notes/:id', noteActions.deleteNote)




module.exports = router