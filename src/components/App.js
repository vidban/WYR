import React, { Component, Fragment } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'
import WelcomeLogin from './WelcomeLogin'
import Home from './Home'
import LoadingBar from 'react-redux-loading';
import QuestionDetail from './QuestionDetail';

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
              : <div>
                  <Route path = '/' exact component= {WelcomeLogin} />
                  <Route path = '/home/' component = {Home} />
                  <Route path = '/questions/:id' component = {QuestionDetail} />
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
