'use strict'
const store = require('../store')

const onSignUpSuccess = function () {
  $('#message').text('Signed Up Successfully')
  $('#sign-up').trigger('reset')
  $('#sign-up').hide()
  $('#sign-in').show()
}

const onSignUpFailure = function () {
  $('#message').text('Sign up failed')
}

const onSignInSuccess = function (response) {
  store.user = response.user
  $('#message').text(response.user.email + ' signed in successfully')
  $('#sign-up').hide()
  $('#sign-in').hide()
  $('#create-game').show()
  $('#sign-out').show()
}

const onSignInFailure = function () {
  $('#message').text('Sign in failed')
}

const onSignOutSuccess = function () {
  $('#message').text('I Get It.')
  $('#create-game').hide()
  $('#sign-in').show()
  $('#sign-in').trigger('reset')
  $('#sign-up').show()
  store.user = null
}

const onChangePasswordSuccess = function () {
  $('#message').text('Change password successfully')
  $('#change-password').trigger('reset')
}
const onChangePasswordFailure = function () {
  $('#message').text('Change password failed')
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
