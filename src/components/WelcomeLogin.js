import React, { Component } from 'react'
import { connect } from 'react-redux'
import logo from '../images/spiral.png'
import { handleAddAuthedUser } from '../actions/authedUser'
import { Redirect } from 'react-router-dom'

class WelcomeLogin extends Component {
    state = {
        name: '',
        redirect: false,
    }

    handleChange = () => {
        const name = this.refs.username.value
        this.setState(() => ({
            name
        }))
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const { name } = this.state
        const { dispatch,authedUser } = this.props

        dispatch(handleAddAuthedUser(name))
        if (authedUser.id) {
            this.setState(() => ({
                redirect: true
            }))
        }
    }

    render(){
        const { allUsers, authedUser } = this.props
        const {from} = this.props.location.state || {from: {pathname: '/home'}}
        const { redirect } = this.state

        if (redirect || authedUser.id) {
            return <Redirect to = {from} />
        }

        return (
            <div className="welcome-box">
                <header className="welcome-header">
                    <h2>Welcome to "Would You Rather"</h2>
                    <h4>Please Login to Begin</h4>
                </header>
                <main className="welcome-main">
                    <img src={logo} className="App-logo" alt="moana water symbol" />
                    <h1>Sign in</h1>
                    <form onSubmit={this.handleSubmit}>
                        <select ref = 'username' onChange ={this.handleChange}>
                            <option className="choose">Choose an avatar</option>
                            {allUsers.map((user) => (
                                <option key={user} value ={user}>{user}</option>
                            ))}
                        </select>
                        <button
                            type="submit"
                            className="submit"
                            disabled={!this.state.name} >Enter</button>
                    </form>
                </main>
            </div>
        )
    }
}

function mapStateToProps({users, authedUser, questions}) {
    return {
        allUsers: Object.keys(users),
        authedUser,
        questions,
    }
}

export default connect(mapStateToProps)(WelcomeLogin);
