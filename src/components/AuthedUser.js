import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleGetQuestions } from '../actions/questions'
import AnsweredQs from './AnsweredQs'
import UnansweredQs from './UnansweredQs'


class AuthedUser extends Component {
    state = {
        activeTab: 'AnsweredQs',
    }

    componentDidMount() {
        this.props.dispatch(handleGetQuestions())
    }

    handleAnsweredTabClick = () => {
        this.setState(() => ({
            activeTab: 'AnsweredQs'
        }))
    }

    handleUnansweredTabClick = () => {
        this.setState(() => ({
            activeTab: 'UnansweredQs'
        }))
    }

    render() {
        const { authedUser } = this.props
        const { activeTab } = this.state

        return (
            <main className="info">
                <div className='authed-user'>
                    <h3>You are logged in as:</h3>
                    <img src={authedUser.avatarURL} alt="" />
                    <h2>{authedUser.name}</h2>
                </div>

                <div className="polls">
                        <div className="tab" onClick={this.handleUnansweredTabClick}>
                            <h2>Unanswered Polls</h2>
                        </div>
                        <div className = "tab" onClick={this.handleAnsweredTabClick}>
                            <h2>Answered Polls</h2>
                        </div>
                </div>
                <div className="questions">
                    {activeTab === 'AnsweredQs' &&
                        <AnsweredQs />
                    }
                    {activeTab === 'UnansweredQs' &&
                        <UnansweredQs />
                    }
                </div>
            </main>
        )
    }
}

function mapStateToProps({authedUser}) {
    return {
        authedUser
    }
}

export default connect(mapStateToProps)(AuthedUser)