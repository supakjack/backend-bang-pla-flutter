var express = require('express');
var router = express.Router();
var boqController = require('../controllers/boqController');

router.get('/note', boqController.getAllNote);
router.get('/test/transaction', boqController.getAllNoteTransaction);

module.exports = router;
