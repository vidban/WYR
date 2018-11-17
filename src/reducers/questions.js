import { GET_QUESTIONS, SAVE_ANSWER } from '../actions/questions';

export default function questions (state = {}, action) {
    switch(action.type) {
        case GET_QUESTIONS:
            return {
                ...state,
                ...action.questions
            }
        case SAVE_ANSWER:
            return{
                ...state,
                [action.id]: {
                    ...state[action.id],
                    [action.answer]: {
                        ...state[action.id][action.answer],
                        votes: state[action.id][action.answer].votes.concat([action.authedUser])
                    }
                }
            }
        default:
            return state
    }
}

