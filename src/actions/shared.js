import { getInitialData , saveQuestionAnswer} from '../utils/api'
import { saveAnswer } from '../actions/questions'
import { receiveUsers, addUserAnswer} from '../actions/users'
import { addAuthedUser } from '../actions/authedUser'
import { showLoading, hideLoading } from 'react-redux-loading'

const AUTHED_NAME = 'none'
// const QUESTIONS = {}

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

export function handleSaveQuestionAnswer(authedUser, id, answer) {
    return (dispatch) => {
        dispatch(saveAnswer(authedUser, id, answer))
        dispatch(addUserAnswer(authedUser, id, answer))

        return saveQuestionAnswer({authedUser, id, answer})

    }
}