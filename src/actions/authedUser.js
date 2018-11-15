import { setActiveUser } from '../utils/api'

export const ADD_AUTHED_USER = 'ADD_AUTHED_USER'
export const REMOVE_AUTHED_USER = 'REMOVE_AUTHED_USER'

export function addAuthedUser (name) {
    return {
        type: ADD_AUTHED_USER,
        name
    }
}

export function handleAddAuthedUser(name) {
    return (dispatch) => {

        return setActiveUser(name)
            .then((name) => dispatch(addAuthedUser(name)))
    }
}

export function removeAuthedUser () {
    return {
        type: REMOVE_AUTHED_USER,
    }
}



