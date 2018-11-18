export const GET_QUESTIONS =  'GET_QUESTIONS'
export const SAVE_ANSWER = 'SAVE_ANSWER'
export const ADD_QUESTION = 'SAVE_QUESTION'

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



