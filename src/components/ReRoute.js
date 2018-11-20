import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { connect } from 'react-redux';

function ReRoute({component: Component, isLoggedIn, ...rest}){
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

function mapStateToProps({authUser}){
    return {
        isLoggedIn: authUser !== 'none'
    }
}

export default connect(mapStateToProps)(ReRoute)