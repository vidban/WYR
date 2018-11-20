import React, { Component } from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { Redirect } from 'react-router-dom'
import { removeAuthedUser } from '../actions/authedUser'


class Nav extends Component {

    handleClick = () => {
        const { dispatch } = this.props
        dispatch(removeAuthedUser('none'))
    }
    render() {
        const {authedUser} = this.props
        console.log(this.props)

        if (authedUser === 'none'){
            return <Redirect to={{pathname:'/',
            state: {} }}/>}

        return (
            <nav className='nav'>
                <ul>
                    <li>
                        <h1 className="app-logo">Would You Rather</h1>
                    </li>
                    <li>
                    <NavLink to='/home' style={{textDecoration: 'none'}}>
                        <h2>Home</h2>
                    </NavLink>
                    </li>

                    <li>
                    <NavLink to='/add' style={{textDecoration: 'none'}}>
                        <h2>New Question</h2>
                    </NavLink>
                    </li>

                    <li>
                    <NavLink to='/leaderboard' style={{textDecoration: 'none'}}>
                        <h2>LeaderBoard</h2>
                    </NavLink>
                    </li>

                    <li>
                        <h2 onClick={this.handleClick}>Logout</h2>
                    </li>

                </ul>
            </nav>
        )
    }
}

function mapStateToProps({authedUser}) {
    return {
        authedUser,
    }
}

export default connect(mapStateToProps)(Nav)