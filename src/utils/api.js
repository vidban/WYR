import {
    _getUsers,
    _getAuthedUser,
    _setAuthedUser,
    _getQuestions
  } from './_DATA.js'

export function getInitialData () {
  return Promise.all([
    _getUsers(),
    _getAuthedUser(),
    // _getQuestions
    ]).then(([users,authedUser]) => ({
    users,
    authedUser,
    // questions
    }))
}

export function setAuthedUser(name){
  return _setAuthedUser(name)
}

export function getAllQuestions() {
  return _getQuestions()
}
