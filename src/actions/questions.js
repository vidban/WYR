import { GET_QUESTIONS, SAVE_ANSWER, ADD_QUESTION } from './actionTypes'

export function getQuestions(questions) {
    return {
        type: GET_QUESTIONS,
        questions,
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

export function addQuestion(question) {
    return {
        type: ADD_QUESTION,
        question

    }
}



