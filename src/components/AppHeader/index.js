import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import logo from '../../logo.svg'
import { logout } from '../../actions/auth'

const AppHeader = ({ isAuthenticated, dispatch }) => (
  <nav className="navbar is-transparent">
    <div className="navbar-brand">
      <a className="navbar-item" href="https://devahoy.com" target="_blank">
        <img src={logo} alt="Devahoy LOGO" width="116" height="64" />
      </a>
      <div className="navbar-burger burger" data-target="navbarWithTransparent">
        <span />
        <span />
        <span />
      </div>
    </div>
    <div id="navbarExampleTransparentExample" className="navbar-menu">
      <div className="navbar-end">
        <Link to="/" className="navbar-item">
          Home
        </Link>
        {isAuthenticated ? (
          <Fragment>
            <Link to="/products" className="navbar-item">
              Products
            </Link>

            <div className="navbar-item">
              <p className="control">
                <button
                  className="button is-secondary btn-logout"
                  onClick={() => {
                    dispatch(logout())
                  }}
                >
                  <span className="icon">
                    <i className="fas fa-user" />
                  </span>
                  <span>Logout</span>
                </button>
              </p>
            </div>
          </Fragment>
        ) : (
          <div className="navbar-item">
            <p className="control">
              <Link className="button is-light" to="/login">
                <span className="icon">
                  <i className="fas fa-user" />
                </span>
                <span>Login</span>
              </Link>
            </p>
          </div>
        )}
      </div>
    </div>
  </nav>
)

const mapStateToProps = state => ({
  currentUser: state.auth.currentUser,
  isAuthenticated: state.auth.isAuthenticated
})

export default connect(mapStateToProps)(AppHeader)
