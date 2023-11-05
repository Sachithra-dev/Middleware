import React, { useState } from "react";
import Cookies from "js-cookie";
import { Link } from "react-router-dom";
import styles from './styles.module.css'

const Login = () => {
  const [data, setData] = useState({ username: "", password: "" });
  const [error, setError] = useState("");

  const handleChange = ({ target }) => {
    setData({ ...data, [target.name]: target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = "/api/users/login";
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      const res = await response.json();

      if (response.ok) {
        const expirationDate = new Date();
				expirationDate.setFullYear(expirationDate.getFullYear() + 1);
			
				
				Cookies.set("token", res.data, {
					path: '/',
					domain: 'localhost',
					expires: expirationDate
				  });
        window.location = "/";
      } else {
        setError(res.message);
      }
    } catch (error) {
      console.error(error);
      setError("An error occurred during login.");
    }
  };

  return (
    <div className={styles.login_container}>
      <div className={styles.login_form_container}>
        <div className={styles.left}>
          <form className={styles.form_container} onSubmit={handleSubmit}>
            <h1>Welcome to Sri Tel Web Portal</h1>
            <h1>Login to Your Account</h1>
            <input
              type="text"
              placeholder="Your Mobile Number"
              name="username"
              onChange={handleChange}
              value={data.username}
              required
              className={styles.input}
            />
            <input
              type="password"
              placeholder="Password"
              name="password"
              onChange={handleChange}
              value={data.password}
              required
              className={styles.input}
            />
            {error && <div className={styles.error_msg}>{error}</div>}
            <button type="submit" className={styles.green_btn}>
              Log in
            </button>
          </form>
        </div>
        <div className={styles.right}>
          <h1>New Here ?</h1>
          <Link to="/register">
            <button type="button" className={styles.white_btn}>
              Register
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
