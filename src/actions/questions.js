import { getAllQuestions } from '../utils/api'

export const GET_QUESTIONS =  'GET_QUESTIONS'
export const SAVE_ANSWER = 'SAVE_ANSWER'

export function getQuestions(questions) {
    return {
        type: GET_QUESTIONS,
        questions,
    }
}

export function handleGetQuestions() {
    return (dispatch) => {
        return getAllQuestions()
            .then((questions) => {
                dispatch(getQuestions(questions))
            })
    }
}

export function saveAnswer(authedUser, id, answer) {
    return{
        type: SAVE_ANSWER,
        authedUser,
        id,
        answer
    }
}

