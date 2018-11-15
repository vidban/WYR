import React, { Component, Fragment } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'
import WelcomeLogin from './WelcomeLogin'
import Home from './Home'
import LoadingBar from 'react-redux-loading';

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }
  render() {
    return (
      <Router>
        <Fragment>
          <LoadingBar />
          <div className='container'>
          {this.props.loading === true
              ? null
              :
                <div>
                  <Route path = '/login' exact component= {WelcomeLogin} />
                  <Route path = '/home' component = {Home} />
                </div>
          }
          </div>
        </Fragment>
      </Router>

    );
  }
}

function mapStateToProps ({ authedUser }) {
  return {
    loading: authedUser === null
  }
}

export default connect(mapStateToProps)(App)
