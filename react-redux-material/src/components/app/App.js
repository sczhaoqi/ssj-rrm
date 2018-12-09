import React, { Component } from 'react';
import './App.css';

import AuthService from 'components/security/AuthService';
import withAuth from 'components/security/withAuth';
import { withRouter } from 'react-router-dom';

const Auth = new AuthService();

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isMain: true,
      childBg: 'pink',
    }
    this.changeCom = this.changeCom.bind(this)
  }
  handleLogout() {
    Auth.logout()
    this.props.history.replace('/login');
  }
  render() {
    // 父组件通过state
    return (
      <div>
        <button onClick={this.changeCom}>返回首页</button>
      </div>
    )
  }

  changeCom() {
    this.props.history.push("/")
  }
}

export default withAuth(App);withRouter(App);
