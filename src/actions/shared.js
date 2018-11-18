import { getInitialData , getAllQuestions, saveQuestionAnswer, saveQuestion } from '../utils/api'
import { saveAnswer, getQuestions, addQuestion } from '../actions/questions'
import { receiveUsers, addUserAnswer, addUserQuestion} from '../actions/users'
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

export function handleGetQuestions() {
    return (dispatch) => {
        dispatch(showLoading())
        return getAllQuestions()
            .then((questions) => {
                dispatch(getQuestions(questions))
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

export function handleSaveQuestion(optionOneText,optionTwoText) {

    return (dispatch, getState ) => {
        const { authedUser } = getState()

        dispatch(showLoading())

        return saveQuestion({
            optionOneText,
            optionTwoText,
            author: authedUser.id
        })
        .then((question) => dispatch(addQuestion(question)))
        .then((question) => dispatch(addUserQuestion(question)))
        .then(() => dispatch(hideLoading))
    }
}