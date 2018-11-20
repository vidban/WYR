import { setAuthedUser } from '../utils/api'

import { ADD_AUTHED_USER, REMOVE_AUTHED_USER } from './actionTypes'

export function addAuthedUser (name) {
    return {
        type: ADD_AUTHED_USER,
        name
    }
}

export function removeAuthedUser(name) {
        return {
            type: REMOVE_AUTHED_USER,
            name
        }
}

export function handleAddAuthedUser(name) {
    return (dispatch) => {
        setAuthedUser(name)
            .then((name) => dispatch(addAuthedUser(name)))
    }
}




