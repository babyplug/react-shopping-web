import React from 'react'

import LoginForm from '../components/LoginForm'
import { register } from '../../../actions/auth'

const handleSubmit = (values, dispatch) => {
  const { email, password } = values

  dispatch(register(email, password))
}

export default () => (
  <LoginForm onSubmit={handleSubmit} title="Please register" />
)
