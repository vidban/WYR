import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleSaveQuestion } from '../actions/shared'
import Nav from './Nav'

class NewQuestion extends Component {

    state = {
        optionOne : '',
        optionTwo : ''
    }

    handleChange = (e) => {
        const text = e.target.value
        const id = e.target.id
        console.log(e.target.value)


        this.setState(() => ({
            [id]: text
        }))
    }

    handleSubmit = (e) => {
        e.preventDefault()

        const { dispatch } =this.props
        const { optionOne, optionTwo } = this.state

        dispatch(handleSaveQuestion(optionOne, optionTwo))

        this.setState(() => ({
            optionOne:'',
            optionTwo:''
        }))
    }

    render() {
        const { optionOne,optionTwo } = this.state
        return(
            <div className='container'>
                <Nav />
                <div className='new-question'>
                    <div className='new-header'>
                        <h2> Create New Question </h2>
                    </div>
                    <form onSubmit={this.handleSubmit}>
                        <div className='main'>
                            <span>Complete the question:</span>
                            <h3>Would you rather .....</h3>
                            <input
                                type="text"
                                id='optionOne'
                                value= {optionOne}
                                placeholder="First question here...."
                                onChange = {this.handleChange}
                                required/>
                            <span>or</span>
                            <input
                                type="text"
                                id='optionTwo'
                                value={optionTwo}
                                placeholder="Second question here...."
                                onChange={this.handleChange}
                                required/>
                        </div>
                        <button
                            type="submit"
                            disabled={optionOne === '' || optionTwo === ''}>Submit</button>
                    </form>
                </div>
            </div>

        )
    }
}

export default connect()(NewQuestion);
