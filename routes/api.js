const express = require('express');
const testActions = require('../actions/api/notes.js');
const router = express.Router()

router.get('/', testActions.saveNote)

module.exports = router