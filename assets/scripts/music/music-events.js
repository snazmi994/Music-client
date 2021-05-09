const getFormFields = require('../../../lib/get-form-fields')
const api = require('./music-api')
const ui = require('./ui')

// create
const onAddSong = function (event) {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  api.addSong(formData)
    .then(ui.onAddSongSuccess)
    .catch(ui.onAddSongFailure)
}

// index
const onSongIndex = function () {
  api.songIndex()
    .then(ui.onSongIndex)
    .catch(ui.onSongIndexFailure)
}

// update
const onUpdateSong = function (event) {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  const id = formData.music.id
  console.log('this is form data on update', formData)
  api.updateSong(id, formData)
    .then(ui.onUpdateSongSuccess)
    .catch(ui.onUpdateSongFailure)
}

// delete
const onDeleteSong = function (event) {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  api.deleteSong(formData.music.id)
    .then(ui.onDeleteSong)
    .catch(ui.onDeleteSongFailure)
}

module.exports = {
  onAddSong,
  onSongIndex,
  onUpdateSong,
  onDeleteSong
}
