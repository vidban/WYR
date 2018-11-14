import React, { Component, Fragment } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'
import WelcomeLogin from './WelcomeLogin'

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }
  render() {
    return (
      <Router>
        <Fragment>
          <div className='container'>
            {this.props.loading === true
              ? null
              :
              <div>
                <Route path ='/' exact component= {WelcomeLogin} />
              </div>
            }

          </div>
        </Fragment>
      </Router>

    );
  }
}

/* Only render components/containers when data from handleInitialData is finished */
function mapStateToProps ({authedUser}) {
  return {
    loading: authedUser === null
  }
}
export default connect(mapStateToProps)(App)
