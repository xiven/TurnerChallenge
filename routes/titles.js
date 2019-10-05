const express = require('express');
const router = express.Router();
const titleController = require('../controllers/title');

// @route    GET api/titles
// @desc     Get all titles
// @access   Private
router.get('/', titleController.getTitles);

// @route    GET api/titles/details
// @desc     Get title details
// @access   Private
router.get('/details', titleController.getTitleDetails);

module.exports = router;
