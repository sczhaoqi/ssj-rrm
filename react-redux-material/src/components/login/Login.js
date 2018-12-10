import React from 'react';
import { withRouter } from 'react-router-dom';
import AuthService from 'components/security/AuthService';
import './Login.css';

class Login extends React.Component {
  constructor(){
      super();
      this.handleChange = this.handleChange.bind(this);
      this.Auth = new AuthService();
      this.toApp = this.toApp.bind(this)
  }
  toApp(){
      this.props.history.push("/app")
  }
  render() {
      return (
          <div className="center">
              <div className="card">
                  <h1>Login</h1>
                  <form onSubmit={this.toApp}>
                      <input
                          className="form-item"
                          placeholder="Username goes here..."
                          name="username"
                          type="text"
                          onChange={this.handleChange}
                      />
                      <input
                          className="form-item"
                          placeholder="Password goes here..."
                          name="password"
                          type="password"
                          onChange={this.handleChange}
                      />
                      <input
                          className="form-submit"
                          value="SUBMIT"
                          type="submit"
                      />
                  </form>
              </div>
          </div>
      );
  }

  handleChange(e){
      this.setState(
          {
              [e.target.name]: e.target.value
          }
      )
  }
}
export default withRouter(Login);
