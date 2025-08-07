const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { User } = require('../database/models');
const { Op } = require('sequelize');
const authService = require('../services/auth.service');
const settingService = require('../services/setting.service');

const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key';
const JWT_EXPIRES_IN = process.env.JWT_EXPIRES_IN || '24h';

// Register new user
exports.register = async (req, res) => {
  try {
    const result = await authService.register(req.body);

    // Set token in cookie for ALL routes to ensure proper authentication
    res.cookie('token', result.token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      maxAge: 24 * 60 * 60 * 1000, // 24 hours
      path: '/'
    });

    // For API routes, always return JSON
    if (req.originalUrl.startsWith('/api/')) {
      return res.status(201).json({
        success: true,
        message: 'Registration successful',
        data: result
      });
    }

    // Default response as JSON
    return res.status(201).json({
      success: true,
      message: 'Registration successful',
      data: result
    });
  } catch (error) {
    console.error('Registration error:', error);
    
    // For API routes, always return JSON
    return res.status(400).json({
      success: false,
      message: error.message || 'Registration failed'
    });
  }
};

// Login user
exports.login = async (req, res) => {
  try {
    const result = await authService.login(req.body);

    // Set token in cookie for ALL routes to ensure proper authentication
    res.cookie('token', result.token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      maxAge: 24 * 60 * 60 * 1000, // 24 hours
      path: '/'
    });

    // For API routes, return JSON
    if (req.originalUrl.startsWith('/api/')) {
      return res.status(200).json({
        success: true,
        message: 'Login successful',
        data: result
      });
    }

    // Default response as JSON
    return res.status(200).json({
      success: true,
      message: 'Login successful',
      data: result
    });
  } catch (error) {
    console.error('Login error:', error);
    
    // For API routes, always return JSON
    return res.status(401).json({
      success: false,
      message: error.message || 'Login failed'
    });
  }
};

// Logout user
exports.logout = (req, res) => {
  res.clearCookie('token', { path: '/' });
  
  // For API routes, always return JSON
  return res.status(200).json({
    success: true,
    message: 'Logged out successfully'
  });
};

// Get current user
exports.getCurrentUser = async (req, res) => {
  try {
    const user = await authService.getUserById(req.user.id);
    return res.status(200).json({
      success: true,
      data: { user }
    });
  } catch (error) {
    console.error('Get current user error:', error);
    return res.status(500).json({
      success: false,
      message: error.message || 'Failed to get user information'
    });
  }
}; 