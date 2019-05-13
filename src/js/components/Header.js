import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { startLogout } from '../actions/auth';

export const Header = ({ startLogout }) => (
  <header className="header">
    <div className="content-container">
      <div className="header__content">
        <Link
          className="header__title"
          to="/dashboard"
        >
          <h1>React Redux Firebase BoilerPlate</h1>
        </Link>
        <button
          className="button button--link"
          type="button"
          onClick={startLogout}
        >
      Logout
        </button>
      </div>
    </div>
  </header>
);

Header.propTypes = {
  startLogout: PropTypes.func.isRequired,
};

export default connect(null, { startLogout })(Header);
