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
     <button class='music-destroy' data-id=${music.title}>
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

const onDeleteSong = function () {
  $('#music-destroy-message').text('Book successfully deleted!')
  // adding a class of `success` to the element with the id `books-destroy-message`
  $('#music-destroy-message').addClass('success')
  // use setTimeout to clear out destroyed a book success message.
  // run this callback after 5000 millisconds (5 seconds)
  setTimeout(() => {
    // Clear the destroy books message
    $('#music-destroy-message').text('')
    // Remove the class of `success` from the element with the id `books-destroy-message`
    $('#music-destroy-message').removeClass('success')
  }, 5000)
  $('#music-display').text('The books have changed! Click "Get Books" to refresh.')
  // select every form on the page and cause it to reset (clear the fields)
  $('form').trigger('reset')
}

module.exports = {
  onAddSongSuccess,
  onSongIndex,
  onUpdateSongSuccess,
  onDeleteSong

}
