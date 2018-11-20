import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import AnsweredQs from './AnsweredQs'
import UnansweredQs from './UnansweredQs'


class AuthedUser extends Component {
    state = {
        activeTab: 'UnansweredQs',
    }

    toggleTabs = (e) => {
        const ans = 'UnansweredQs'
        const { activeTab } = this.state

        this.setState(() => ({
                activeTab: activeTab === ans ? 'AnsweredQs' : ans
        }))
    }

    render() {
        const { authedUser } = this.props
        const { activeTab } = this.state
        if (!authedUser.id){
            return <Redirect to="/" />
        }
        return (
            <main className="authed-user">
                <div className='authed-user-info'>
                    <h3>You are logged in as:</h3>
                    <img src={authedUser.avatarURL} alt="" />
                    <h2>{authedUser.name}</h2>
                </div>
                <div className="authed-user-poll-tab">
                    <div className="authed-user-polls">
                            <div className={activeTab === 'UnansweredQs' ? 'tab active' : 'tab'} onClick={this.toggleTabs}>
                                <h2>Unanswered Polls</h2>
                            </div>
                            <div className = {activeTab === 'AnsweredQs' ? 'tab active' : 'tab'} onClick={this.toggleTabs}>
                                <h2>Answered Polls</h2>
                            </div>
                    </div>
                    <div className="authed-user-questions">
                        {activeTab === 'AnsweredQs' &&
                            <AnsweredQs />
                        }
                        {activeTab === 'UnansweredQs' &&
                            <UnansweredQs />
                        }
                    </div>
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