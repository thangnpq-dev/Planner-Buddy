const Footer = () => {
  return (
    <footer className="landing-footer py-5 bg-white border-top">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 mb-4 mb-lg-0">
            <a href="/" className="d-flex align-items-center mb-3 text-decoration-none">
              <i className="fas fa-calendar-check me-2" style={{ color: 'var(--primary-color)' }}></i>
              <span className="h5 mb-0 text-dark">Planner Buddy</span>
            </a>
            <p className="text-muted">Your personal assistant for managing tasks and appointments with smart reminders.</p>
            <div className="social-links">
              <a href="https://github.com/UnFameeee" className="text-secondary me-3" target="_blank" rel="noopener noreferrer" title="GitHub">
                <i className="fab fa-github"></i>
              </a>
              <a href="https://linkedin.com/in/thangnpq" className="text-secondary" target="_blank" rel="noopener noreferrer" title="LinkedIn">
                <i className="fab fa-linkedin"></i>
              </a>
            </div>
          </div>
          <div className="col-6 col-lg-2 mb-4 mb-lg-0">
            <h6 className="mb-3">Features</h6>
            <ul className="list-unstyled mb-0">
              <li className="mb-2"><a href="/features#todos" className="text-muted text-decoration-none">Todo Management</a></li>
              <li className="mb-2"><a href="/features#appointments" className="text-muted text-decoration-none">Appointments</a></li>
              <li className="mb-2"><a href="/features#calendar" className="text-muted text-decoration-none">Calendar View</a></li>
              <li><a href="/features#reminders" className="text-muted text-decoration-none">Email Reminders</a></li>
            </ul>
          </div>
          <div className="col-6 col-lg-2 mb-4 mb-lg-0">
            <h6 className="mb-3">Company</h6>
            <ul className="list-unstyled mb-0">
              <li className="mb-2"><a href="/about" className="text-muted text-decoration-none">About Us</a></li>
              <li className="mb-2"><a href="/contact" className="text-muted text-decoration-none">Contact</a></li>
              <li className="mb-2"><a href="/privacy" className="text-muted text-decoration-none">Privacy Policy</a></li>
              <li><a href="/terms" className="text-muted text-decoration-none">Terms of Service</a></li>
            </ul>
          </div>
          <div className="col-lg-4">
            <h6 className="mb-3">Stay Updated</h6>
            <p className="text-muted mb-3">Subscribe to our newsletter for updates and tips.</p>
            <form className="mb-3">
              <div className="input-group">
                <input type="email" className="form-control" placeholder="Enter your email" />
                <button className="btn btn-primary" type="submit">Subscribe</button>
              </div>
            </form>
          </div>
        </div>
        <hr className="my-4" />
        <div className="row align-items-center">
          <div className="col-md-6 text-center text-md-start">
            <p className="mb-0 text-muted">&copy; {new Date().getFullYear()} Planner Buddy. All rights reserved.</p>
          </div>
          <div className="col-md-6 text-center text-md-end mt-3 mt-md-0">
            <img src="/img/payment-methods.png" alt="Payment methods" height="24" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
