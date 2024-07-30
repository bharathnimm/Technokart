import React, { Component } from 'react';
import axios from 'axios';
import './Login.css'; // Ensure this file has the appropriate CSS

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      error: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  async handleSubmit(event) {
    event.preventDefault();
    const { email, password } = this.state;

    try {
      // Send a POST request to the backend to authenticate the user
      const response = await axios.post('http://localhost:5000/api/auth/login', { email, password });

      // Store the JWT token and user information in localStorage
      localStorage.setItem('token', response.data.token);
      localStorage.setItem('user', JSON.stringify(response.data.user));

      // Clear any previous errors
      this.setState({ error: '' });

      // Redirect to the dashboard or any other route
      this.props.history.push('/dashboard'); // Make sure you're using React Router
    } catch (error) {
      // Set error message if login fails
      this.setState({ error: 'Invalid email or password' });
    }
  }

  render() {
    return (
      <div className="login-container">
        <h2>Login</h2>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label>Email:</label>
            <input
              type="email"
              name="email"
              value={this.state.email}
              onChange={this.handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Password:</label>
            <input
              type="password"
              name="password"
              value={this.state.password}
              onChange={this.handleChange}
              required
            />
          </div>
          <button type="submit">Login</button>
          {this.state.error && <p className="error">{this.state.error}</p>}
        </form>
      </div>
    );
  }
}

export default Login;

