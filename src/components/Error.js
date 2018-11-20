import React, { Component } from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'


class Error extends Component {

    render() {
        return(
            <div>
               <div
                    style = {{
                        width: `80%`,
                        margin: `auto`,
                        marginTop: `5%`,
                        border: `1px solid gray`,
                        padding: `10%`,
                        fontSize: `1.3em`
                    }}>
                    <h1>Error 404</h1>
                    <NavLink
                        to='/'>
                        <h2
                            style = {{
                                color: `black`
                            }}>
                            Go Home
                        </h2>
                    </NavLink>
                </div>
            </div>
        )
    }
}


function mapStateToProps({authedUser}) {
    return {
        authedUser,
    }
}

export default connect(mapStateToProps)(Error)