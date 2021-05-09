'use strict'
const store = require('../store')

const onAddSongSuccess = function (response) {
  store.music = response.music
  $('#music-message').text('song added successfully!')
  $('#music-message').addClass('success')
  setTimeout(() => {
    $('#music-message').text('')
    $('#music-message').removeClass('success')
  }, 5000)
  $('#music-display').text('Added Your New Jams!')
  $('form').trigger('reset')
}

const onAddSongFailure = function () {
  $('#music-essage').text('Song Could Not Be Added')
}

const onSongIndex = function (responseData) {
  const music = responseData
  console.log(responseData)
  let musicHtml = ''
  music.forEach(music => {
    musicHtml += `
    <p contenteditable="true">
    <h6> &#127925; Now Playing &#127925; </h6>
    <br>
    <br>
     <h4> ${music.title}</h4>
     <p><h2> ${music.artist}</h2></p>
     <p><h3>${music.fav_song}</h3></p>
     <p><small>${music._id}<small></p>
</p>
        `
  })
  $('#music-display').html(musicHtml)
}

const onUpdateSongSuccess = function () {
  $('#music-message').text('Song successfully updated!')
  $('#music-message').addClass('success')
  setTimeout(() => {
    $('#music-message').text('')
    $('#music-message').removeClass('success')
  }, 5000)
  $('#music-display').text('The song has changed!')
  $('form').trigger('reset')
}
const onUpdateSongFailure = function () {
  $('#music-message').text('Change Song Failed')
}

const onDeleteSong = function () {
  $('#music-message').text('song successfully deleted!')
  $('#music-message').addClass('success')
  setTimeout(() => {
    $('#music-message').text('')
    $('#music-message').removeClass('success')
  }, 5000)
  $('#music-display').text('The songs have changed!')
  $('form').trigger('reset')
}
const onDeleteSongFailure = function () {
  $('#music-message').text('Delete Failed')
}

module.exports = {
  onAddSongSuccess,
  onSongIndex,
  onUpdateSongSuccess,
  onDeleteSong,
  onDeleteSongFailure,
  onUpdateSongFailure,
  onAddSongFailure

}
