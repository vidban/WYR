import React, { Component, Fragment } from 'react'
import { Route, Switch, withRouter} from 'react-router-dom'
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'
import WelcomeLogin from './WelcomeLogin'
import Home from './Home'
import LoadingBar from 'react-redux-loading'
import QuestionDetail from './QuestionDetail'
import QuestionStats from './QuestionStats'
import NewQuestion from './NewQuestion'
import LeaderBoard from './LeaderBoard'
import ReRoute from './ReRoute'
import Error from './Error'

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }
  render() {
    return (
        <Fragment>
          <LoadingBar />
          <div className='container'>
          {this.props.loading === true
              ? null
              :
              <Switch>
                  <Route path = '/' exact component= {WelcomeLogin} />
                  <ReRoute exact path = '/home' component = {Home} />
                  <ReRoute exact path = '/questions/:id' component = {QuestionDetail} />
                  <ReRoute exact path = '/question/:id' component= {QuestionStats} />
                  <ReRoute exact path = '/add' component = {NewQuestion} />
                  <ReRoute exact path = '/leaderboard' component = {LeaderBoard} />
                  <Route component = {Error} /> {/* TODO */}
              </Switch>
          }
          </div>
        </Fragment>
    )
  }
}

function mapStateToProps ({ authedUser }) {
  return {
    loading: authedUser === null
  }
}

export default withRouter(connect(mapStateToProps)(App))
