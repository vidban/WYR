import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleSaveQuestionAnswer } from '../actions/shared'
import Nav from './Nav'


class QuestionDetail extends Component {
    state = {
        selected: null
    }

    handleOptionChange = (e) => {
        const selected = e.target.value

        this.setState(() => ({
            selected
        }))

    }

    handleSubmit = (e) => {
        e.preventDefault()

        const { selected } = this.state
        const { dispatch, authedUser, id } = this.props
        console.log(authedUser.id, id)
        dispatch(handleSaveQuestionAnswer(authedUser.id, id, selected))

    }

    render() {
        const { users, question } = this.props
        console.log(question)
        return(
            <div>
                < Nav />
                <div className="question" style={{border: `2px solid black`, width: `80%`, margin: `auto`}}>
                    <div className="question-askedby" style={{width:`80%`, margin: `auto`, borderBottom: `2px solid grey`}}>
                        <div style={{border: `none`}}>
                            <h4>{`Asked by ${question.author}`}</h4>
                            <img className="question-image" src={users[question.author].avatarURL} alt="authorized user" style={{width: `200px`, height: `200px`}}/>
                        </div>
                    </div>
                    <form className="question-actual"
                        onSubmit={this.handleSubmit}
                        style={{color: `seagreen`, margin: `auto`, flexDirection: `column`, justifyContent: `left`, alignItems: `center`}}>
                        <h2 style ={{color: `seagreen`}}>Would you rather</h2>
                        <div className="options" style={{flexDirection: `inherit`, alignItems: `left`}}>
                            <label>
                            <input type='radio'
                                    name='option'
                                    value='optionOne'
                                    style={{margin: `5px`, padding: `5px`}}
                                    onChange = {this.handleOptionChange} />
                                    {question.optionOne.text}
                            </label>
                            <label>
                                <input type='radio'
                                    name='option'
                                    value='optionTwo'
                                    onChange = {this.handleOptionChange}/>
                                    {question.optionTwo.text}
                            </label>
                        </div>
                        <button style={{width: `80%`, height: `30px`}}>Submit</button>
                    </form>
                </div>
            </div>
        )
    }
}

function mapStateToProps ({authedUser, users, questions}, { match }) {
    console.log(questions)
    const question = questions[match.params.id]
    const id = match.params.id
    return {
        authedUser,
        id,
        question,
        users
    }
}

export default connect(mapStateToProps)(QuestionDetail)