import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  // For now, we'll simulate user data. In a real app, this would come from an API call.
  const [user, setUser] = useState({
    username: 'JohnDoe',
    todos: [
      { id: 1, title: 'Complete project proposal', completed: false, due_date: '2023-10-15', priority: 'high' },
      { id: 2, title: 'Buy groceries', completed: true, due_date: '2023-10-10', priority: 'medium' },
      { id: 3, title: 'Call dentist', completed: false, due_date: '2023-10-20', priority: 'low' },
      { id: 4, title: 'Prepare presentation', completed: false, due_date: '2023-10-18', priority: 'high' },
      { id: 5, title: 'Renew gym membership', completed: false, due_date: '2023-11-01', priority: 'medium' }
    ],
    appointments: [
      { id: 1, title: 'Team meeting', description: 'Weekly team sync', start_time: '2023-10-12T10:00:00' },
      { id: 2, title: 'Doctor appointment', description: 'Annual checkup', start_time: '2023-10-15T14:30:00' },
      { id: 3, title: 'Client presentation', description: 'Project showcase', start_time: '2023-10-18T15:00:00' }
    ]
  });

  // In a real app, you would fetch user data from an API
  // useEffect(() => {
  //   const fetchUserData = async () => {
  //     try {
  //       const res = await api.get('/dashboard');
  //       setUser(res.data.user);
  //     } catch (err) {
  //       console.error('Error fetching dashboard data:', err);
  //     }
  //   };
  //   fetchUserData();
  // }, []);

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'high': return '#dc3545';
      case 'medium': return '#ffc107';
      case 'low': return '#28a745';
      default: return '#6c757d';
    }
  };

  return (
    <div className="container-fluid">
      <div className="row g-4">
        {/* Welcome Section */}
        <div className="col-12">
          <div className="card border-0 shadow-sm">
            <div className="card-body p-4">
              <div className="d-flex justify-content-between align-items-center">
                <div>
                  <h1 className="h3 mb-2">Welcome back, {user.username}! 👋</h1>
                  <p className="text-muted mb-0">Here's what's happening with your tasks and appointments.</p>
                </div>
                <Link to="/auth/logout" className="btn btn-outline-primary">
                  <i className="fas fa-sign-out-alt me-2"></i>
                  Logout
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Todos Section */}
        <div className="col-md-6">
          <div className="card border-0 shadow-sm h-100">
            <div className="card-header bg-transparent border-0 py-3">
              <div className="d-flex justify-content-between align-items-center">
                <h5 className="mb-0">
                  <i className="fas fa-tasks me-2" style={{ color: 'var(--primary-color)' }}></i>
                  Your Todos
                </h5>
                <Link to="/todos/create" className="btn btn-primary btn-sm">
                  <i className="fas fa-plus me-1"></i>
                  Add Todo
                </Link>
              </div>
            </div>
            <div className="card-body">
              {user.todos && user.todos.length > 0 ? (
                <>
                  <div className="list-group list-group-flush">
                    {user.todos.slice(0, 5).map(todo => (
                      <div className="list-group-item border-0 px-0" key={todo.id}>
                        <div className="d-flex align-items-center">
                          <div className="form-check">
                            <input 
                              type="checkbox" 
                              className="form-check-input" 
                              checked={todo.completed}
                              readOnly
                            />
                          </div>
                          <div className="ms-3 flex-grow-1">
                            <h6 className={`mb-0 ${todo.completed ? 'text-decoration-line-through text-muted' : ''}`}>
                              {todo.title}
                            </h6>
                            <small className="text-muted">
                              Due: {new Date(todo.due_date).toLocaleDateString()}
                            </small>
                          </div>
                          <span 
                            className="badge rounded-pill" 
                            style={{ backgroundColor: getPriorityColor(todo.priority) }}
                          >
                            {todo.priority}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                  {user.todos.length > 5 && (
                    <div className="text-center mt-3">
                      <Link to="/todos/all" className="btn btn-link text-primary">View all todos</Link>
                    </div>
                  )}
                </>
              ) : (
                <div className="text-center py-4">
                  <img src="/img/empty-todo.svg" alt="No todos" className="mb-3" style={{ width: '120px' }} />
                  <p className="text-muted mb-0">No todos yet. Add one to get started!</p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Appointments Section */}
        <div className="col-md-6">
          <div className="card border-0 shadow-sm h-100">
            <div className="card-header bg-transparent border-0 py-3">
              <div className="d-flex justify-content-between align-items-center">
                <h5 className="mb-0">
                  <i className="far fa-calendar-alt me-2" style={{ color: 'var(--primary-color)' }}></i>
                  Your Appointments
                </h5>
                <Link to="/appointments/create" className="btn btn-primary btn-sm">
                  <i className="fas fa-plus me-1"></i>
                  Add Appointment
                </Link>
              </div>
            </div>
            <div className="card-body">
              {user.appointments && user.appointments.length > 0 ? (
                <>
                  <div className="list-group list-group-flush">
                    {user.appointments.slice(0, 5).map(appointment => (
                      <div className="list-group-item border-0 px-0" key={appointment.id}>
                        <h6 className="mb-1">{appointment.title}</h6>
                        <p className="mb-1 text-muted small">{appointment.description}</p>
                        <div className="d-flex align-items-center text-muted small">
                          <i className="far fa-clock me-1"></i>
                          {new Date(appointment.start_time).toLocaleString()}
                        </div>
                      </div>
                    ))}
                  </div>
                  {user.appointments.length > 5 && (
                    <div className="text-center mt-3">
                      <Link to="/appointments/all" className="btn btn-link text-primary">View all appointments</Link>
                    </div>
                  )}
                </>
              ) : (
                <div className="text-center py-4">
                  <img src="/img/empty-calendar.svg" alt="No appointments" className="mb-3" style={{ width: '120px' }} />
                  <p className="text-muted mb-0">No appointments scheduled. Add one to get started!</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
