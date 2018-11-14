import { getInitialData } from '../utils/api'
import { receiveUsers } from '../actions/users'
import { setAuthedUser } from '../actions/authedUser'

const AUTHED_ID = 'moana'

export function handleInitialData() {
    return (dispatch) => {
        return getInitialData()
            .then(({users}) => {
                dispatch(receiveUsers(users))
                dispatch(setAuthedUser(AUTHED_ID))
            })
    }
}