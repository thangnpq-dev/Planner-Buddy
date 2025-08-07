const express = require('express');
const router = express.Router();

// Import API routes
const todoRoutes = require('./todo.routes');
const appointmentRoutes = require('./appointment.routes');
const settingRoutes = require('./setting.routes');
const authRoutes = require('./auth.routes');
const dashboardRoutes = require('./dashboard.routes');
const profileRoutes = require('./profile.routes');

// Register API routes
router.use('/todos', todoRoutes);
router.use('/appointments', appointmentRoutes);
router.use('/settings', settingRoutes);
router.use('/auth', authRoutes);
router.use('/dashboard', dashboardRoutes);
router.use('/profile', profileRoutes);

module.exports = router;