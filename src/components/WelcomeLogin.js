import React, { Component } from 'react'
import { connect } from 'react-redux'
import logo from '../images/spiral.png'
import { handleAddAuthedUser } from '../actions/authedUser'
import { Redirect } from 'react-router-dom'

class WelcomeLogin extends Component {
    state = {
        name: '',
        loggedIn: false,
    }

    handleChange = () => {
        const name = this.refs.username.value
        console.log(name)
        this.setState(() => ({
            name
        }))
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const { name } = this.state
        const { dispatch } = this.props

        dispatch(handleAddAuthedUser(name))

        this.setState(() => ({
            loggedIn: true
        }))
    }

    render(){
        const { userNames } = this.props
        const { loggedIn } = this.state
        console.log(loggedIn)

        if (loggedIn === true) {
            return <Redirect to = '/home' />
        }

        return (
            <div className="welcome-box">
                <header className="welcome-header">
                    <h2>Welcome to the "Would You Rather" App!</h2>
                    <h3>Please log in to Continue</h3>
                </header>
                <section>
                    <img src={logo} className="App-logo" alt="man thinking" />
                    <h1>Sign in</h1>
                    <form onSubmit={this.handleSubmit}>
                        <select ref = 'username' onChange ={this.handleChange}>
                            {userNames.map((user) => (
                                <option key={user} value ={user}>{user}</option>
                            ))}
                        </select>
                        <button type="submit" className="login" >Enter</button>
                    </form>
                </section>
            </div>
        )
    }
}

function mapStateToProps({users}) {
    return {
        userNames: Object.keys(users)
    }
}

export default connect(mapStateToProps)(WelcomeLogin);
