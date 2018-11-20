import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleSaveQuestionAnswer } from '../actions/shared'
import Nav from './Nav'
import { Redirect } from 'react-router-dom'



class QuestionDetail extends Component {
    state = {
        selected: null,
        toHome: false,
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
        dispatch(handleSaveQuestionAnswer(authedUser.id, id, selected))

        this.setState(() => ({
            toHome: true
        }))
    }

    render() {
        const { authedUser, users, question } = this.props
        const { toHome } = this.state

        if (toHome === true || !authedUser.id) {
            return <Redirect to='/home' />
        }
        return(
            <div>
                < Nav />
                <div className="question-detail" style={{border: `2px solid gray`, marginTop: `20%`, width: `80%`, margin: `auto`}}>
                    <div className="question-askedby" style={{width:`80%`, margin: `auto`,  marginTop: `10%`, borderBottom: `2px solid grey`}}>
                        <div style={{border: `none`}}>
                            <h4>{`Asked by ${question.author === authedUser.id ? "you" : question.author }`}</h4>
                            <img className="question-image" src={users[question.author].avatarURL} alt="authorized user" style={{width: `200px`, height: `200px`}}/>
                        </div>
                    </div>
                    <form className="question-actual"
                        onSubmit={this.handleSubmit}
                        style={{color: `seagreen`, margin: `auto`, flexDirection: `column`, justifyContent: `left`, alignItems: `center`}}>
                        <h2 style ={{color: `rgb(36, 128, 128)`}}>Would you rather</h2>
                        <div className="options" style={{flexDirection: `inherit`, alignItems: `left`, marginBottom: `2%`}}>
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