const appointmentService = require('../services/appointment.service');

// Get all appointments for current user
const getAllAppointments = async (req, res) => {
  try {
    const userId = req.user.id;
    
    // Extract query parameters for filtering, pagination, and sorting
    const { date, start_date, end_date, search, page, limit, sortBy, sortOrder, view, year, month } = req.query;

    console.log('Appointment query params:', req.query);
    
    // Handle calendar views
    if (view === 'week' && date) {
      // Handle week view
      const appointments = await appointmentService.getAppointmentsByWeek(userId, date);
      return res.status(200).json({
        success: true,
        data: appointments
      });
    } else if (date && !view) {
      // Handle day view
      const appointments = await appointmentService.getAppointmentsByDay(userId, date);
      return res.status(200).json({
        success: true,
        data: appointments
      });
    } else if (year && month && view === 'month') {
      // Handle month view
      const appointments = await appointmentService.getAppointmentsByMonth(userId, year, month);
      return res.status(200).json({
        success: true,
        data: appointments
      });
    }
    
    // Default: Get appointments with options 
    const result = await appointmentService.getUserAppointments(userId, {
      start_date,
      end_date,
      search,
      page: parseInt(page) || 1,
      limit: parseInt(limit) || 10,
      sortBy: sortBy || 'start_time',
      sortOrder: sortOrder || 'ASC'
    });
    
    return res.status(200).json({
      success: true,
      data: result
    });
  } catch (error) {
    console.error('Error in getAllAppointments:', error);
    return res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

// Get appointments by day
const getAppointmentsByDay = async (req, res) => {
  try {
    const userId = req.user.id;
    const { date } = req.params;
    
    if (!date) {
      return res.status(400).json({
        success: false,
        message: 'Date is required'
      });
    }
    
    // Get appointments for the specified day
    const appointments = await appointmentService.getAppointmentsByDay(userId, date);
    
    return res.status(200).json({
      success: true,
      data: appointments
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

// Get appointments by week
const getAppointmentsByWeek = async (req, res) => {
  try {
    const userId = req.user.id;
    const { date } = req.query;
    
    if (!date) {
      return res.status(400).json({
        success: false,
        message: 'Date is required'
      });
    }
    
    // Get appointments for the specified week
    const appointments = await appointmentService.getAppointmentsByWeek(userId, date);
    
    return res.status(200).json({
      success: true,
      data: appointments
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

// Get appointments by month
const getAppointmentsByMonth = async (req, res) => {
  try {
    const userId = req.user.id;
    const { year, month } = req.query;
    
    if (!year || !month) {
      return res.status(400).json({
        success: false,
        message: 'Year and month are required'
      });
    }
    
    // Get appointments for the specified month
    const appointments = await appointmentService.getAppointmentsByMonth(userId, year, month);
    
    return res.status(200).json({
      success: true,
      data: appointments
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

// Get a single appointment by ID
const getAppointmentById = async (req, res) => {
  try {
    const userId = req.user.id;
    const appointmentId = req.params.id;
    
    // Get appointment
    const appointment = await appointmentService.getAppointmentById(appointmentId, userId);
    
    return res.status(200).json({
      success: true,
      data: appointment
    });
  } catch (error) {
    return res.status(404).json({
      success: false,
      message: error.message
    });
  }
};

// Create a new appointment
const createAppointment = async (req, res) => {
  try {
    const userId = req.user.id;
    const appointmentData = req.body;
    
    // Validate required fields
    if (!appointmentData.title || !appointmentData.start_time || !appointmentData.end_time) {
      return res.status(400).json({
        success: false,
        message: 'Title, start_time, and end_time are required for appointment'
      });
    }
    
    // Create appointment
    const newAppointment = await appointmentService.createAppointment(appointmentData, userId);
    
    return res.status(201).json({
      success: true,
      message: 'Appointment created successfully',
      data: newAppointment
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: error.message
    });
  }
};

// Update an existing appointment
const updateAppointment = async (req, res) => {
  try {
    const userId = req.user.id;
    const appointmentId = req.params.id;
    const appointmentData = req.body;
    
    // Update appointment
    const updatedAppointment = await appointmentService.updateAppointment(appointmentId, appointmentData, userId);
    
    return res.status(200).json({
      success: true,
      message: 'Appointment updated successfully',
      data: updatedAppointment
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: error.message
    });
  }
};

// Delete an appointment
const deleteAppointment = async (req, res) => {
  try {
    const userId = req.user.id;
    const appointmentId = req.params.id;
    
    // Delete appointment
    const result = await appointmentService.deleteAppointment(appointmentId, userId);
    
    return res.status(200).json({
      success: true,
      message: 'Appointment deleted successfully'
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: error.message
    });
  }
};

// Get upcoming appointments
const getUpcomingAppointments = async (req, res) => {
  try {
    const userId = req.user.id;
    const limit = parseInt(req.params.limit) || 5;
    
    // Get upcoming appointments
    const appointments = await appointmentService.getUpcomingAppointments(userId, limit);
    
    return res.status(200).json({
      success: true,
      data: appointments
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

// Get limited number of appointments for current user (for dashboard)
const getUserAppointments = async (userId, limit = 5) => {
  try {
    const result = await appointmentService.getUserAppointments(userId, {
      limit: limit,
      sortBy: 'start_time',
      sortOrder: 'ASC'
    });
    
    return result.appointments;
  } catch (error) {
    console.error('Controller - Error in getUserAppointments:', error);
    throw error;
  }
};

module.exports = {
  getAllAppointments,
  getAppointmentsByDay,
  getAppointmentsByWeek,
  getAppointmentsByMonth,
  getAppointmentById,
  createAppointment,
  updateAppointment,
  deleteAppointment,
  getUpcomingAppointments,
  getUserAppointments
};