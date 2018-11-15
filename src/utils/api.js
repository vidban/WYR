import {
    _getUsers,
    _setActiveUser
  } from './_DATA.js'

export function getInitialData () {
  return Promise.all([
    _getUsers(),
    ]).then(([users]) => ({
    users,
    }))
}

export function setActiveUser(name){
  return _setActiveUser(name)
}
