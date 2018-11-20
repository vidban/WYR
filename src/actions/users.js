import { RECEIVE_USERS, ADD_USER_ANSWER, ADD_USER_QUESTION} from './actionTypes'

export function receiveUsers(users) {
    return {
        type: RECEIVE_USERS,
        users,
    }
}

export function addUserAnswer (authedUser, id, answer){
    return {
        type: ADD_USER_ANSWER,
        authedUser,
        id,
        answer
    }
}

export function addUserQuestion(question) {
    return {
        type: ADD_USER_QUESTION,
        question: question
    }
}

