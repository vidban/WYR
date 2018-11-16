import {
    _getUsers,
    _getAuthedUser,
    _setAuthedUser
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
