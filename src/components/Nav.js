import React from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { Redirect } from 'react-router-dom'
import { removeAuthedUser } from '../actions/authedUser'

const Nav = ({ authedUser, logOut}) => {
    const navLinks = () => {
        const links = [
            ['/', 'Home'],
            ['/add', 'New Question'],
            ['/leaderboard', 'LeaderBoard']
        ]

        return links.map(link => (
            <li key={link[1]}>
                <NavLink to={link[0]} style = {{ textDecoration: 'none'}} >
                <h2>{link[1]}</h2>
                </NavLink>
            </li>
        ))
    }

    if (authedUser === 'none') return <Redirect to='/' />

    return (
        <nav className="nav">
            <ul>
                <li>
                    <h1 className="app-logo">Would You Rather</h1>
                </li>
                {navLinks()}
                <li>
                    <h2 onClick= { () => logOut()}>Logout</h2>
                </li>
            </ul>
        </nav>
    )
}

const mapDispatchToProps = dispatch => ({
    logOut: () => dispatch(removeAuthedUser('none'))
})

const mapStateToProps = ({ authedUser }) => ({ authedUser })

export default connect(mapStateToProps, mapDispatchToProps)(Nav)