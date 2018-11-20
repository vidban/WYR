import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Error () {
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
                    <h1>Page Not Found!!</h1>
                    <NavLink
                        to='/'>
                        <h2
                            style = {{
                                color: `black`
                            }}>
                            Go Back
                        </h2>
                    </NavLink>
                </div>
            </div>
        )
}