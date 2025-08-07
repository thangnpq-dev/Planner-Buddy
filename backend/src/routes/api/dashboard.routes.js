const express = require('express');
const router = express.Router();
const { authenticate } = require('../../middleware/auth.middleware');
const dashboardController = require('../../controllers/dashboard.controller');

// Apply authentication middleware to all routes
router.use(authenticate);

// Get dashboard data (todos and appointments)
router.get('/', dashboardController.getDashboardData);

module.exports = router;
