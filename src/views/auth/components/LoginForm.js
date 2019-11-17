import React from 'react'
import { Link } from 'react-router-dom'
import { reduxForm, Field } from 'redux-form'
import { connect } from 'react-redux'
import { compose } from 'recompose'

import ErrorMessage from '../../../components/ErrorMessage'

import './LoginForm.css'

const LoginForm = props => {
  const { title, isLoginForm, error, handleSubmit } = props

  return (
    <div className="container">
      <div className="columns is-centered">
        <form className="column is-4 login-form" onSubmit={handleSubmit}>
          <div className="login-box">
            <h1 className="title">{title}</h1>
            <div className="field">
              <label className="label">Email</label>
              <div className="control">
                <Field
                  name="email"
                  className="input"
                  type="email"
                  component="input"
                  placeholder="youremail@example.com"
                />
              </div>
            </div>

            <div className="field">
              <label className="label">Password</label>
              <div className="control">
                <Field
                  name="password"
                  className="input"
                  component="input"
                  type="password"
                  placeholder=""
                />
              </div>
            </div>

            {error ? <ErrorMessage message={error.message} /> : null}

            <div className="actionable">
              <div className="field">
                <div className="control">
                  <button
                    type="submit"
                    className="button is-primary is-fullwidth"
                  >
                    Submit
                  </button>
                </div>
              </div>

              <div className="field">
                <div className="control has-text-centered">
                  {isLoginForm ? (
                    <Link to="/register" className="is-link register-link">
                      Don't have an account? Register
                    </Link>
                  ) : (
                    <Link to="/login" className="is-link register-link">
                      Back to login
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

const stateToProps = state => ({
  error: state.auth.error
})

export default compose(
  reduxForm({
    form: 'auth-form'
  }),
  connect(stateToProps)
)(LoginForm)
