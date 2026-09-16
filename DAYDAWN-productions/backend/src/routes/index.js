const express = require('express');
const healthRoutes = require('./healthRoutes');
const inquiryRoutes = require('./inquiryRoutes');
const productionRoutes = require('./productionRoutes');

const router = express.Router();

// Versioned API routes: /api/v1/...
router.use('/health', healthRoutes);
router.use('/inquiries', inquiryRoutes);
router.use('/productions', productionRoutes);

module.exports = router;
