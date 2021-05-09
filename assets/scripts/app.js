'use strict'
const events = require('./auth/events')
const musicEvents = require('./music/music-events')

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  $('#sign-in').show()
  $('#sign-out').hide()
  $('#sign-up').show()
  $('#change-password').hide()

  $('#sign-up').on('submit', events.onSignUp)
  $('#sign-in').on('submit', events.onSignIn)
  $('#sign-out').on('click', events.onSignOut)
  $('#change-password').on('submit', events.onChangePassword)

  $('#music-create').on('submit', musicEvents.onAddSong)
  $('#music-index').on('click', musicEvents.onSongIndex)
  $('#music-update').on('submit', musicEvents.onUpdateSong)
  $('#music-destroy').on('submit', musicEvents.onDeleteSong)
})
