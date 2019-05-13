import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { startGithubLogin, startGoogleLogin } from '../actions/auth';

export const LoginPage = ({ startGoogleLogin, startGithubLogin }) => (
  <div className="box-layout">
    <div className="box-layout__box">
      <h1 className="box-layout__title">React Redux Firebase Boilerplate</h1>
      <p>
        Tagline for App
      </p>
      <button
        className="button google-login"
        type="button"
        onClick={startGoogleLogin}
      >
      Login with Google
      </button>
      <button
        className="button github-login"
        type="button"
        onClick={startGithubLogin}
      >
      Login with Github
      </button>
    </div>
  </div>
);

LoginPage.propTypes = {
  startGithubLogin: PropTypes.func.isRequired,
  startGoogleLogin: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  startGithubLogin: () => dispatch(startGithubLogin()),
  startGoogleLogin: () => dispatch(startGoogleLogin()),
});

export default connect(null, mapDispatchToProps)(LoginPage);
