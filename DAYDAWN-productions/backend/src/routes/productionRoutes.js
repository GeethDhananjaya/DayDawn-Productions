const express = require('express');
const { getProductions, getProductionById } = require('../controllers/productionController');

const router = express.Router();

router.get('/', getProductions);
router.get('/:id', getProductionById);

module.exports = router;
