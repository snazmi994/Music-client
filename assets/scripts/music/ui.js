'use strict'
const store = require('../store')

const onAddSongSuccess = function (response) {
  store.music = response.music
  $('#message').text('song added successfully!')
  $('#message').addClass('success')
  setTimeout(() => {
    $('#message').text('')
    $('#message').removeClass('success')
  }, 5000)
  $('#music-display').text('Added Your New Jams!')
  $('form').trigger('reset')
}

const onSongIndex = function (responseData) {
  const music = responseData
  console.log(responseData)
  let musicHtml = ''
  music.forEach(music => {
    musicHtml += `
     <h4>Title: ${music.title}</h4>
     <p>Artist: ${music.artist}</p>
     <p>Song: ${music.fav_song}</p>
     <button class='music-destroy' data-id=${music._id}>
        Delete Button
      </button>
        `
  })
  $('#music-display').html(musicHtml)
}

const onUpdateSongSuccess = function () {
  $('#message').text('Song successfully updated!')
  $('#message').addClass('success')
  setTimeout(() => {
    $('#message').text('')
    $('#message').removeClass('success')
  }, 5000)
  $('#music-display').text('The song has changed! Click See Library.')
  $('form').trigger('reset')
}

const onDeleteSongSuccess = function () {
  $('#message').text('Song has been successfully deleted!')
  $('#message').addClass('success')
  setTimeout(() => {
    $('#message').text('')
    $('#message').removeClass('success')
  }, 5000)
  $('#music-display').text('The songs have changed! Click "See Library" to refresh.')
  $('form').trigger('reset')
}
module.exports = {
  onAddSongSuccess,
  onSongIndex,
  onUpdateSongSuccess,
  onDeleteSongSuccess

}
