import { ADD_AUTHED_USER, REMOVE_AUTHED_USER } from '../actions/authedUser'

export default function authedUser (state = null, action) {
    switch(action.type) {
        case ADD_AUTHED_USER:
            return action.name
        case REMOVE_AUTHED_USER:
            return action.name
        default:
            return state
    }
}