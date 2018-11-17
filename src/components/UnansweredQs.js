import React, { Component } from 'react'
import { connect } from 'react-redux'

class UnansweredQs extends Component {
    // checks if the autherized user answered that particular question
    checkUser(id,first,second) {
        return (first.indexOf(id) !== -1) === (second.indexOf(id) !== -1)
    }

    render() {
        const { authedUser, questions,questionIds } = this.props
        return (
            <div className="question">
                <ul >
                    {questionIds.map((id) => (
                        this.checkUser(authedUser.id,questions[id].optionOne.votes,questions[id].optionTwo.votes) && (
                            <li key={id}>
                                <h4 >{`Asked by ${questions[id].author}`}</h4>
                                {/* <img src={authedUser.avatarURL} alt="authorized user" /> */}
                                <h3>Would you rather</h3>
                                <div className="options">
                                    <span>{questions[id].optionOne.text}</span>
                                    <span>{questions[id].optionTwo.text}</span>
                                </div>
                            </li>
                        )
                    ))}
                </ul>
            </div>
        )
    }
}

function mapStateToProps({authedUser, questions}) {
    return {
        authedUser,
        questions,
        questionIds: Object.keys(questions)
    }
}

export default connect(mapStateToProps)(UnansweredQs)
