import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'
// import WelcomeLogin from './WelcomeLogin'

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }
  render() {
    return (
      <div className='container'>
      Hello There You!
        {/* <WelcomeLogin /> */}
      </div>
    );
  }
}

export default connect()(App)
