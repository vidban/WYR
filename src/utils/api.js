import {
    _getUsers,
    _getAuthedUser,
    _setAuthedUser,
    _getQuestions,
    _saveQuestionAnswer
  } from './_DATA.js'

export function getInitialData () {
  return Promise.all([
    _getUsers(),
    _getAuthedUser(),
    ]).then(([users,authedUser]) => ({
    users,
    authedUser,
    }))
}

export function setAuthedUser(name){
  return _setAuthedUser(name)
}

export function getAllQuestions() {
  return _getQuestions()
}

export function saveQuestionAnswer(authedUser, id, answer) {
  return _saveQuestionAnswer(authedUser, id, answer)
}