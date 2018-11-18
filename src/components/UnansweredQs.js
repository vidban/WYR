import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

class UnansweredQs extends Component {
    // checks if the autherized user answered that particular question
    checkUser(id,first,second) {
        return (first.indexOf(id) !== -1) === (second.indexOf(id) !== -1)
    }

    render() {
        const { users, authedUser, questions, questionIds } = this.props
        return (
            <div className="question">
                <ul >
                    {questionIds.map((id) => (
                        this.checkUser(authedUser.id,questions[id].optionOne.votes,questions[id].optionTwo.votes) && (
                            <li key={id}>
                                <div className="question-askedby">
                                    <div>
                                        <h4>{`Asked by ${questions[id].author}`}</h4>
                                        <img className="question-image" src={users[questions[id].author].avatarURL} alt="authorized user" />
                                    </div>
                                </div>
                                <div className="question-actual">
                                    <div>
                                        <h2>Would you rather</h2>
                                        <div className="options">
                                            <h3>{questions[id].optionOne.text}</h3>
                                            <h3>{questions[id].optionTwo.text}</h3>
                                        </div>
                                    </div>
                                </div>
                                <Link
                                to={`/questions/${id}`}
                                style={{textDecoration:`none`, color:`black`}}
                                >
                                    <div className="question-view">
                                        <span>View Question</span>
                                    </div>
                                </Link>
                            </li>
                        )
                    ))}
                </ul>
            </div>
        )
    }
}

function mapStateToProps({users, authedUser, questions}) {
    return {
        users,
        authedUser,
        questions,
        questionIds: Object.keys(questions)
        .sort((a, b) => questions[b].timestamp - questions[a].timestamp)
    }
}

export default connect(mapStateToProps)(UnansweredQs)
