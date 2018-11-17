import { getAllQuestions } from '../utils/api'

export const GET_QUESTIONS =  'GET_QUESTIONS'

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