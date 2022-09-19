const express = require('express');
const testActions = require('../actions/api/test.js');
const router = express.Router()

router.get('/', testActions.homePage)

module.exports = router