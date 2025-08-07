const express = require('express');
const router = express.Router();
const { authenticate } = require('../../middleware/auth.middleware');
const profileController = require('../../controllers/profile.controller');

// Apply authentication middleware to all routes
router.use(authenticate);

// Get user profile
router.get('/', profileController.getProfile);

// Update profile
router.post('/update', profileController.updateProfile);

// Change password
router.post('/change-password', profileController.changePassword);

module.exports = router;
