import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleSaveQuestion } from '../actions/shared'
import Nav from './Nav'
import { Redirect } from 'react-router-dom'

class NewQuestion extends Component {

    state = {
        optionOne : '',
        optionTwo : '',
        toHome: false,
    }

    handleChange = (e) => {
        const { value, id } = e.target;
        this.setState({ [id]: value })
    }

    handleSubmit = (e) => {
        e.preventDefault()

        const { dispatch } =this.props
        const { optionOne, optionTwo } = this.state

        dispatch(handleSaveQuestion(optionOne, optionTwo))

        this.setState({
            optionOne:'',
            optionTwo:'',
            toHome: true
        })
    }

    render() {
        const { optionOne,optionTwo, toHome } = this.state

        if (toHome === true) {
            return <Redirect to='/home' />
        }
        return(
            <div className='new-container'>
                <Nav />
                <div className='new-question'>
                    <div className='new-header'>
                        <h2> Create A New Question </h2>
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
                            className="submit"
                            type="submit"
                            disabled={optionOne === '' || optionTwo === ''}>Submit</button>
                    </form>
                </div>
            </div>

        )
    }
}

export default connect()(NewQuestion);
