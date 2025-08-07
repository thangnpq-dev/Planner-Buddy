import { Link } from 'react-router-dom';

const LandingPage = () => {
  // For now, we'll simulate user state. In a real app, this would come from context or state management.
  const user = null; // Change this to test authenticated vs unauthenticated views

  return (
    <div className="container py-5">
      {/* Landing Page Content */}
      <div className="row align-items-center min-vh-75">
        <div className="col-lg-6 d-flex flex-column justify-content-center text-center text-lg-start">
          <span className="badge bg-light text-primary rounded-pill px-3 py-2 mb-3 d-inline-block" style={{ maxWidth: 'fit-content' }}>
            Simple. Powerful. Productive.
          </span>
          <h1 className="display-4 fw-bold mb-4">Plan Your Day with Planner Buddy</h1>
          <p className="lead mb-4">A comprehensive task and appointment management system with email reminders via Gmail.</p>
          <div className="d-grid gap-2 d-md-flex justify-content-md-start">
            {user ? (
              <>
                <Link to="/dashboard" className="btn btn-primary btn-lg px-4 me-md-2">
                  <i className="fas fa-columns me-2"></i>Go to Dashboard
                </Link>
                <Link to="/auth/logout" className="btn btn-outline-primary btn-lg px-4">
                  <i className="fas fa-sign-out-alt me-2"></i>Logout
                </Link>
              </>
            ) : (
              <>
                <Link to="/register" className="btn btn-primary btn-lg px-4 me-md-2">Get Started</Link>
                <Link to="/login" className="btn btn-outline-primary btn-lg px-4">Login</Link>
              </>
            )}
          </div>
        </div>
        <div className="col-lg-6 d-none d-lg-block">
          <div className="d-flex justify-content-center align-items-center h-100">
            <img src="/img/planner-buddy.png" className="img-fluid" alt="Planner Buddy" />
          </div>
        </div>
      </div>

      <div className="row py-5 mt-5">
        <div className="col-12 text-center mb-5">
          <h2 className="fw-bold">Features</h2>
          <p className="lead">Everything you need to stay organized and productive</p>
        </div>
        <div className="col-md-4 mb-4">
          <div className="card h-100 shadow-sm feature-card">
            <div className="card-body text-center">
              <div className="feature-icon">
                <i className="fas fa-tasks fa-3x text-primary"></i>
              </div>
              <h4>Task Management</h4>
              <p>Create, organize, and track your tasks with priorities, due dates, and reminders.</p>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="card h-100 shadow-sm feature-card">
            <div className="card-body text-center">
              <div className="feature-icon">
                <i className="far fa-calendar-alt fa-3x text-primary"></i>
              </div>
              <h4>Appointment Scheduling</h4>
              <p>Schedule and manage appointments with details, locations, and email reminders.</p>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="card h-100 shadow-sm feature-card">
            <div className="card-body text-center">
              <div className="feature-icon">
                <i className="far fa-bell fa-3x text-primary"></i>
              </div>
              <h4>Email Reminders</h4>
              <p>Never miss an important deadline with customizable email reminders.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="row py-5">
        <div className="col-12 text-center mb-5">
          <h2 className="fw-bold">Why Choose Planner Buddy?</h2>
          <p className="lead">Built with modern features to help you stay productive</p>
        </div>
        <div className="col-md-6 col-lg-3 mb-4">
          <div className="text-center">
            <i className="fas fa-mobile-alt fa-3x text-primary mb-3"></i>
            <h5>Responsive Design</h5>
            <p className="text-muted">Access your tasks and appointments from any device.</p>
          </div>
        </div>
        <div className="col-md-6 col-lg-3 mb-4">
          <div className="text-center">
            <i className="fas fa-shield-alt fa-3x text-primary mb-3"></i>
            <h5>Secure & Private</h5>
            <p className="text-muted">Your data is encrypted and stored securely.</p>
          </div>
        </div>
        <div className="col-md-6 col-lg-3 mb-4">
          <div className="text-center">
            <i className="fas fa-sync fa-3x text-primary mb-3"></i>
            <h5>Real-time Sync</h5>
            <p className="text-muted">Changes are synced instantly across all devices.</p>
          </div>
        </div>
        <div className="col-md-6 col-lg-3 mb-4">
          <div className="text-center">
            <i className="fas fa-envelope fa-3x text-primary mb-3"></i>
            <h5>Email Integration</h5>
            <p className="text-muted">Get reminders directly in your Gmail inbox.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
