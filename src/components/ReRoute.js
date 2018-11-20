import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { connect } from 'react-redux';

function ReRoute({component: Component, isLoggedIn, ...rest}){
    console.log(isLoggedIn)
    return(
        <Route
            {...rest}
            render={(props) => isLoggedIn
                ? <Component {...props} />
                : <Redirect to={{
                pathname:'/',
               state: {from: props.location}
                }}/>
            }
        />
)}

function mapStateToProps({authedUser}){
    return {
        isLoggedIn: authedUser !== 'none'
    }
}

export default connect(mapStateToProps)(ReRoute)