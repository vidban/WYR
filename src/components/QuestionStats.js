import React, { Component } from 'react'
import { connect } from 'react-redux'
import Nav from './Nav'

class QuestionStats extends Component {

    render() {
        const { users, question, optionOneLen, optionTwoLen, totalVotes, optionOneScore, optionTwoScore } = this.props

        return (
            <div>
                <Nav />
                <div className="question" style={{border: `2px solid black`, width: `80%`, margin: `auto`}}>
                    <div className="question-askedby" style={{width:`80%`, margin: `auto`, borderBottom: `2px solid grey`}}>
                        <div style={{border: `none`}}>
                            <h4>{`Asked by ${question.author}`}</h4>
                            <img className="question-image" src={users[question.author].avatarURL} alt="authorized user" style={{width: `200px`, height: `200px`}}/>
                        </div>
                    </div>
                    <div className="question-actual"
                        style={{width:`90%`, color: `seagreen`, margin: `auto`, flexDirection: `column`, justifyContent: `left`, alignItems: `center`}}>
                        <h2 style ={{color: `seagreen`, width: `100%`}}>Results :</h2>
                        <div className="options" style={{flexDirection: `inherit`, alignItems: `left`}}>
                            <div className='option' style={{width: `100%`}}>
                                <h3 style={{width: `100%`, border:`none`}}>{`Would you rather ${question.optionOne.text}`}</h3>
                                <div style={{minWidth: `100%`, minHeight: `30px`, backgroundColor:`seashell`, border: `1px solid gray` }}>
                                    <div className="progress" style={optionOneLen > 0  ? {maxWidth:`${optionOneScore}%`, minHeight:`30px`, backgroundColor:`rgb(36, 128, 128)`} : {backgroundColor:`inherit`}}></div>
                                </div>
                                <span>{`Showing ${optionOneLen} of ${totalVotes} votes`}</span>
                                <span style={{display:`block`}}>{`${optionOneScore}% users selected this option`}</span>
                            </div>
                            <div className='option' style={{width: `100%`}}>
                                <h3 style={{width: `100%`, border:`none`}}>{`Would you rather ${question.optionTwo.text}`}</h3>
                                <div style={{minWidth: `100%`, minHeight: `30px`, backgroundColor:`seashell` }}>
                                    <div className="progress" style={optionTwoLen > 0  ? {maxWidth:`${optionTwoScore}%`, minHeight:`30px`, backgroundColor:`rgb(36, 128, 128)`} : {backgroundColor:`inherit`}}></div>
                                </div>
                                <span>{`Showing ${optionTwoLen} of ${totalVotes} votes`}</span>
                                <span style={{display:`block`}}>{`${optionTwoScore}% users selected this option`}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps ({users,questions}, { match }) {
    const question = questions[match.params.id]
    let optionOneLen = question.optionOne.votes.length
    let optionTwoLen = question.optionTwo.votes.length
    let totalVotes = optionOneLen + optionTwoLen
    let optionOneScore = ((optionOneLen / totalVotes ) * 100).toFixed()
    let optionTwoScore = ((optionTwoLen / totalVotes ) * 100).toFixed()
    console.log(question,optionOneLen,optionTwoLen,totalVotes,optionOneScore,optionTwoScore)

    const id = match.params.id
    return {
        users,
        questions,
        question,
        id,
        optionOneLen,
        optionTwoLen,
        totalVotes,
        optionOneScore,
        optionTwoScore
    }
}

export default connect(mapStateToProps)(QuestionStats)