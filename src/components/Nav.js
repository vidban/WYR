import React, { Component } from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { Redirect } from 'react-router-dom'


class Nav extends Component {
    render() {
        const {authedUser} = this.props

        if (authedUser === 'none')
            return <Redirect to='/' />

        return (
            <nav className='nav'>
                <ul>

                    <li>
                    <NavLink to='/home' style={{textDecoration: 'none'}}>
                        <h1>Would You Rather</h1>
                    </NavLink>
                    </li>

                    <li>
                    <NavLink to='/' exact style={{textDecoration: 'none'}}>
                        <h2>Logout</h2>
                    </NavLink>
                    </li>

                </ul>
            </nav>
        )
    }
}

function mapStateToProps({authedUser}) {
    return {
        authedUser
    }
}

export default connect(mapStateToProps)(Nav)