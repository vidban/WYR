import React, { Component } from 'react'
import { connect } from 'react-redux'


class AuthedUser extends Component {
    state = {
        activeTab: ''
    }
    render() {
        const { authedUser } = this.props
        const { activeTab } = this.state;

        return (
            <main className="info">
                <div className='authed-user'>
                    <h3>You are logged in as:</h3>
                    <img src={authedUser.avatarURL} alt="" />
                    <h2>{authedUser.name}</h2>
                </div>

                <div className="polls">
                        <div className="tab">
                            <h2>Unanswered Polls</h2>
                        </div>
                        <div className = "tab">
                            <h2>Answered Polls</h2>
                        </div>
                </div>
                <div className="questions">
                   {/* Add answered/unanswered components*/}
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