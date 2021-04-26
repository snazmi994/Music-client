'use strict'
const store = require('../store')

const onSignUpSuccess = function () {
  $('#log-message').text('Signed Up Successfully')
  $('#sign-up').trigger('reset')
}

const onSignUpFailure = function () {
  $('#log-message').text('Sign up failed')
}

const onSignInSuccess = function (response) {
  store.user = response.user
  $('#log-message').text(response.user.email + ' signed in successfully')
}

const onSignInFailure = function () {
  $('log-message').text('Sign in failed')
}

const onSignOutSuccess = function () {
  $('#log-message').text('See you later')
  $('#sign-in').trigger('reset')

  store.user = null
}

const onChangePasswordSuccess = function () {
  $('#log-message').text('Change password successfully')
  $('#change-password').trigger('reset')
}
const onChangePasswordFailure = function () {
  $('#log-message').text('Change password failed')
}


module.exports = {
  onSignUpSuccess,
  onSignUpFailure,
  onSignInSuccess,
  onSignInFailure,
  onSignOutSuccess,
  onChangePasswordSuccess,
  onChangePasswordFailure

}
