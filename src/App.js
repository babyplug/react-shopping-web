import React, { Component } from 'react'
import './App.css'
import HomeRoute from './views/home/HomeRoute'
import ProductRoute from './views/products/ProductRoute'
import AppHeader from './components/AppHeader'
import AuthRoute from './views/auth/AuthRoute'
import { fetchCurrentUser } from './actions/auth'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'

class App extends Component {
  componentDidMount() {
    const { dispatch } = this.props

    dispatch(fetchCurrentUser())
  }

  render() {
    return (
      <div className="App">
        <AppHeader />
        <AuthRoute />
        <HomeRoute />
        <ProductRoute />
      </div>
    )
  }
}

export default withRouter(connect()(App))
