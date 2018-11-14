import React, { Component } from 'react'
import { connect } from 'react-redux'
import logo from '../images/spiral.png'

class WelcomeLogin extends Component {
    render(){
        console.log(this.props)
        return (
            <div className="welcome-box">
                <header className="welcome-header">
                    <h2>Welcome to the "Would You Rather" App!</h2>
                    <h3>Please log in to Continue</h3>
                </header>
                <section>
                    <img src={logo} className="App-logo" alt="man thinking" />
                    <h1>Sign in</h1>
                    <select >
                        {this.props.users.map((user) => (
                             <option key={user}>{user}</option>
                        ))}
                    </select>
                    <button type="submit" className="login">Enter</button>

                </section>
            </div>
        )
    }
}

function mapStateToProps({users}) {
    return {
        users: Object.keys(users)
    }
}

export default connect(mapStateToProps)(WelcomeLogin);
