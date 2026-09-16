const express = require('express');
const { createInquiry, getInquiries } = require('../controllers/inquiryController');

const router = express.Router();

router.post('/', createInquiry);
router.get('/', getInquiries);

module.exports = router;
