import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

class Home extends React.Component {
  constructor(props) {
    super(props)
    this.toSignIn = this.toSignIn.bind(this)
    this.toSignOn = this.toSignOn.bind(this)
  }
  toSignIn() {
    this.props.history.push('/login')
  }
  toSignOn() {
    this.props.history.push('/register')
  }
  render() {
    return (
      <React.Fragment>
        <div />
        <main>
          <button variant="contained" color="primary" onClick={this.toSignIn}>
            SignIn</button>
            <button variant="contained" color="primary" onClick={this.toSignOn}>
            SignOn</button>
        </main>
        <footer>
          <div variant="h6" align="center" gutterBottom>
            Footer
        </div>
          <div variant="subtitle1" align="center" color="textSecondary" component="p">
            Something here to give the footer a purpose!
        </div>
        </footer>
        {/* End footer */}
      </React.Fragment>
    );
  }
}

Home.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withRouter(Home);