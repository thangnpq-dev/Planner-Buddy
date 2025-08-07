import { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  // For now, we'll simulate user state. In a real app, this would come from context or state management.
  const user = null; // Change this to test authenticated vs unauthenticated views

  return (
    <header className="landing-header">
      <nav className="navbar navbar-expand">
        <div className="container">
          <Link className="navbar-brand d-flex align-items-center" to="/">
            <i className="fas fa-calendar-check me-2" style={{ color: 'var(--primary-color)' }}></i>
            Planner Buddy
          </Link>
          <ul className="navbar-nav ms-auto">
            {user ? (
              <>
                <li className="nav-item">
                  <Link className="btn btn-primary me-2" to="/dashboard">
                    <i className="fas fa-columns me-1"></i>
                    Go to Dashboard
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="btn btn-outline-primary" to="/auth/logout">
                    <i className="fas fa-sign-out-alt me-1"></i>
                    Logout
                  </Link>
                </li>
              </>
            ) : (
              <>
                <li className="nav-item">
                  <Link className="nav-link px-3" to="/login">Login</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link px-3" to="/register">Register</Link>
                </li>
                <li className="nav-item ms-2">
                  <Link className="btn btn-primary" to="/register">
                    <i className="fas fa-user-plus me-1"></i>
                    Get Started
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
