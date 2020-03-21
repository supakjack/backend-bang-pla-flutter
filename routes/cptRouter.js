var express = require('express');
var router = express.Router();
var cptController = require('../controllers/cptController');

router.get('/type', cptController.getAllDataType);
router.get('/test/transaction', cptController.getAllDataTypeTransaction);

module.exports = router;
