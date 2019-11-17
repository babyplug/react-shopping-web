import React from 'react'

import LoginForm from '../components/LoginForm'
import { login } from '../../../actions/auth'

const handleSubmit = (values, dispatch) => {
  const { email, password } = values

  dispatch(login(email, password))
}

export default () => (
  <LoginForm
    onSubmit={handleSubmit}
    title="please login to continue"
    isLoginForm={true}
  />
)
