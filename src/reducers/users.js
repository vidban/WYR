import { RECEIVE_USERS, ADD_USER_ANSWER, ADD_USER_QUESTION} from '../actions/actionTypes';

export default function users (state = {}, action) {
    switch(action.type) {
        case RECEIVE_USERS:
            return {
                ...state,
                ...action.users
            }
        case ADD_USER_ANSWER:
            return {
                ...state,
                [action.authedUser]:{
                    ...state[action.authedUser],
                    answers: {
                        ...state[action.authedUser].answers,
                        [action.id] : action.answer
                    }
                }
            }
        case ADD_USER_QUESTION:
            return {
                ...state,
                [action.question.question.author]: {
                  ...state[action.question.question.author],
                  questions: state[action.question.question.author].questions.concat([action.question.question.id])
                }
            }
        default:
            return state
    }
}