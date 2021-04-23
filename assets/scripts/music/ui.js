'use strict'
const store = require('../store')

const onAddSongSuccess = function () {
  $('#message').text('song added successfully!')
  $('#message').addClass('success')
  setTimeout(() => {
    $('#message').text('')
    $('#message').removeClass('success')
  }, 5000)
  $('#music-display').text('Added Your New Jams!')
  $('form').trigger('reset')
}


module.exports = {
  onAddSongSuccess

}
