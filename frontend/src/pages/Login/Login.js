import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'; // Import your CSS file for additional styling

const Login = () => {
  return (
    <div className="container-fluid h-100">
      <div className="row h-100">
        {/* First column for image */}
        <div className="col-md-6 h-100 image-column">
          <img src="path_to_your_image" alt="Login" />
        </div>

        {/* Second column for login form */}
        <div className="col-md-6 h-100 d-flex align-items-center justify-content-center">
          <div className="login-form">
            <h2>Login</h2>
            <form>
              <div className="form-group">
                <label htmlFor="username">Username</label>
                <input type="text" className="form-control" id="username" />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input type="password" className="form-control" id="password" />
              </div>
              <button type="submit" className="btn btn-primary">Login</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
