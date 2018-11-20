import React, { Component } from 'react'
import { connect } from 'react-redux'
import Nav from './Nav'

class LeaderBoard extends Component {

    calculateAnswers = (userId, users) => {
        let ids = users[userId].answers
        let numAnswers = Object.keys(ids)

        return numAnswers.length


    }
    render() {
        const { info, userIds } = this.props

        return (
            <div>
                <Nav />
                <div className="leaderboard">
                    {userIds.map((userId) => (
                        <div className="each-user" key={userId}>
                            <section className = "image-section">
                                <div className='image'>
                                    <img src={info[userId].avatarURL} alt="user" />
                                </div>
                            </section>
                            <section className="main-section">
                                <div className="main-inside">
                                    <h1>Name</h1>
                                    <div className="main-info">
                                        <h3>Answered Questions -</h3>
                                        <h3>{info[userId].totalA}</h3>
                                    </div>
                                    <div className="main-info">
                                        <h3>Asked Questions -</h3>
                                        <h3>{info[userId].totalQ}</h3>
                                    </div>
                                </div>
                            </section>
                            <section className="score-section">
                                <div className='score'>
                                    <h3>Score</h3>
                                    <h3>{info[userId].total}</h3>
                                </div>
                            </section>
                        </div>
                    ))}
                </div>
            </div>
        )
    }
}

function mapStateToProps({users}) {
    let info = users
    let userInfo = Object.keys(users)
    userInfo.forEach((user) => {
        let qns = users[user].questions.length
        let ans = Object.keys(users[user].answers).length
        info[user].totalQ = qns
        info[user].totalA = ans
        info[user].total = qns+ans
    })
    return {
        info,
        userIds: Object.keys(info)
            .sort((a, b) => users[b].total - users[a].total)
    }
}

export default connect(mapStateToProps)(LeaderBoard)
