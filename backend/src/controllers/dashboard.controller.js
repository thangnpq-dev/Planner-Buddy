// Get dashboard data
const getDashboardData = async (req, res) => {
  try {
    const todoService = require('../services/todo.service');
    const appointmentService = require('../services/appointment.service');
    
    // Get user's todos and appointments for display on dashboard
    const todoResult = await todoService.getUserTodos(req.user.id, { limit: 5 });
    const appointments = await appointmentService.getUpcomingAppointments(req.user.id, 5);
    
    // Prepare dashboard data
    const dashboardData = { 
      todos: todoResult.todos || [],
      appointments: appointments || []
    };
    
    return res.status(200).json({
      success: true,
      data: dashboardData
    });
  } catch (error) {
    console.error('Error getting dashboard data:', error);
    return res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

// Get statistics data
const getStatisticsData = async (req, res) => {
  try {
    const todoService = require('../services/todo.service');
    const appointmentService = require('../services/appointment.service');
    
    // Get current date in YYYY-MM-DD format
    const today = new Date();
    const formattedDate = today.toISOString().split('T')[0];
    
    // Get today's todos
    const todayTodos = await todoService.getTodosByDate(req.user.id, formattedDate);
    
    // Get today's appointments
    const todayAppointments = await appointmentService.getAppointmentsByDay(req.user.id, formattedDate);
    
    // Prepare statistics data
    const statisticsData = {
      todayTodos,
      todayAppointments,
      currentDate: today
    };
    
    return res.status(200).json({
      success: true,
      data: statisticsData
    });
  } catch (error) {
    console.error('Error getting statistics data:', error);
    return res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

module.exports = {
  getDashboardData,
  getStatisticsData
};