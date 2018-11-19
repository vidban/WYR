import React, { Component, Fragment } from 'react'
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'
import WelcomeLogin from './WelcomeLogin'
import Home from './Home'
import LoadingBar from 'react-redux-loading'
import QuestionDetail from './QuestionDetail'
import QuestionStats from './QuestionStats'
import NewQuestion from './NewQuestion'
import LeaderBoard from './LeaderBoard'
import Error from './Error'

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
              : <Switch> {/*To render the first path that matches*/}
                  <Route path = '/' exact component= {WelcomeLogin} />
                  <Route path = '/home' exact component = {Home} />
                  <Route path = '/questions/:id' component = {QuestionDetail} />
                  <Route path = '/question/:id' component= {QuestionStats} />
                  <Route path = '/add' exact component = {NewQuestion} />
                  <Route path = '/leaderboard' exact component = {LeaderBoard} />
                  <Route component = {Error} /> {/* TODO */}
                </Switch>
          }
          </div>
        </Fragment>
      </Router>
    )
  }
}

function mapStateToProps ({ authedUser }) {
  return {
    loading: authedUser === null
  }
}

export default connect(mapStateToProps)(App)
