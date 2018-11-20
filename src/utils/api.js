import {
    _getUsers,
    _getAuthedUser,
    _setAuthedUser,
    _getQuestions,
    _saveQuestion,
    _saveQuestionAnswer
  } from './_DATA.js'

export function getInitialData () {
  return Promise.all([
    _getUsers(),
    _getAuthedUser(),
    _getQuestions(),
    ]).then(([users,authedUser,questions]) => ({
    users,
    authedUser,
    questions
    }))
}

export function setAuthedUser(name){
  return _setAuthedUser(name)
}

export function saveQuestion(question) {
  return _saveQuestion(question)
}

export function saveQuestionAnswer(authedUser, id, answer) {
  return _saveQuestionAnswer(authedUser, id, answer)
}