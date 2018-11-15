import { getInitialData } from '../utils/api'
import { receiveUsers } from '../actions/users'
import { addAuthedUser } from '../actions/authedUser'
// import { handleAddAuthedUser } from '../actions/authedUser'
import { showLoading, hideLoading } from 'react-redux-loading'

const AUTHED_NAME = 'none'

export function handleInitialData() {
    return (dispatch) => {
        dispatch(showLoading())
        return getInitialData()
            .then(({users}) => {
                dispatch(receiveUsers(users))
                dispatch(addAuthedUser(AUTHED_NAME))
                dispatch(hideLoading())
            })
    }
}