const todoService = require('../services/todo.service');

// Get all todos for current user
const getAllTodos = async (req, res) => {
  try {
    const userId = req.user.id;
    
    // Extract query parameters for filtering, pagination, and sorting
    const { status, priority, search, page, limit, sortBy, sortOrder } = req.query;
    
    console.log('Controller - Request params:', { 
      userId,
      status,
      priority,
      search,
      page,
      limit,
      sortBy,
      sortOrder
    });

    // Get todos with options
    const result = await todoService.getUserTodos(userId, {
      status,
      priority,
      search,
      page: parseInt(page) || 1,
      limit: parseInt(limit) || 10,
      sortBy: sortBy || 'due_date',
      sortOrder: sortOrder || 'ASC'
    });
    
    return res.status(200).json({
      success: true,
      data: result
    });
  } catch (error) {
    console.error('Controller - Error in getAllTodos:', error);
    console.error('Controller - Error stack:', error.stack);
    return res.status(500).json({
      success: false,
      message: error.message,
      stack: process.env.NODE_ENV === 'development' ? error.stack : undefined
    });
  }
};

// Get a single todo by ID
const getTodoById = async (req, res) => {
  try {
    const userId = req.user.id;
    const todoId = req.params.id;
    
    // Get todo
    const todo = await todoService.getTodoById(todoId, userId);
    
    return res.status(200).json({
      success: true,
      data: todo
    });
  } catch (error) {
    return res.status(404).json({
      success: false,
      message: error.message
    });
  }
};

// Create a new todo
const createTodo = async (req, res) => {
  try {
    const userId = req.user.id;
    const todoData = req.body;
    
    // Validate required fields
    if (!todoData.title) {
      return res.status(400).json({
        success: false,
        message: 'Title is required for todo'
      });
    }
    
    // Create todo
    const newTodo = await todoService.createTodo(todoData, userId);
    
    return res.status(201).json({
      success: true,
      message: 'Todo created successfully',
      data: newTodo
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: error.message
    });
  }
};

// Update an existing todo
const updateTodo = async (req, res) => {
  try {
    const userId = req.user.id;
    const todoId = req.params.id;
    const todoData = req.body;
    
    // Update todo
    const updatedTodo = await todoService.updateTodo(todoId, todoData, userId);
    
    return res.status(200).json({
      success: true,
      message: 'Todo updated successfully',
      data: updatedTodo
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: error.message
    });
  }
};

// Delete a todo
const deleteTodo = async (req, res) => {
  try {
    const userId = req.user.id;
    const todoId = req.params.id;
    
    // Delete todo
    const result = await todoService.deleteTodo(todoId, userId);
    
    return res.status(200).json({
      success: true,
      message: 'Todo deleted successfully'
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: error.message
    });
  }
};

// Mark todo as completed
const markAsCompleted = async (req, res) => {
  try {
    const userId = req.user.id;
    const todoId = req.params.id;
    const { isCompleted = true } = req.body;
    
    // Mark todo as completed
    const updatedTodo = await todoService.markTodoAsCompleted(todoId, userId, isCompleted);
    
    return res.status(200).json({
      success: true,
      message: `Todo marked as ${isCompleted ? 'completed' : 'incomplete'}`,
      data: updatedTodo
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: error.message
    });
  }
};

// Get todos by date
const getTodosByDate = async (req, res) => {
  try {
    const userId = req.user.id;
    const date = req.params.date;
    
    // Get todos for specific date
    const todos = await todoService.getTodosByDate(userId, date);
    
    return res.status(200).json({
      success: true,
      data: todos
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: error.message
    });
  }
};

// Mark todo as uncompleted
const markAsUncompleted = async (req, res) => {
  try {
    const userId = req.user.id;
    const todoId = req.params.id;
    
    // Mark todo as uncompleted
    const updatedTodo = await todoService.markTodoAsCompleted(todoId, userId, false);
    
    return res.status(200).json({
      success: true,
      message: 'Todo marked as incomplete',
      data: updatedTodo
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: error.message
    });
  }
};

// Get limited number of todos for current user (for dashboard)
const getUserTodos = async (userId, limit = 5) => {
  try {
    const result = await todoService.getUserTodos(userId, {
      limit: limit,
      sortBy: 'due_date',
      sortOrder: 'ASC'
    });
    
    return result.todos;
  } catch (error) {
    console.error('Controller - Error in getUserTodos:', error);
    throw error;
  }
};

module.exports = {
  getAllTodos,
  getTodoById,
  createTodo,
  updateTodo,
  deleteTodo,
  markAsCompleted,
  getTodosByDate,
  markAsUncompleted,
  getUserTodos
};