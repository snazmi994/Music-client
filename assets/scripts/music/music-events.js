const getFormFields = require('../../../lib/get-form-fields')
const api = require('./music-api')
const ui = require('./ui')

// create
const onAddSong = function (event) {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  console.log(formData)
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

const onCreateComment = function (event) {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  const id = formData.musicId
  console.log(id)
  console.log(formData)
  api.createComment(formData, id)
    .then(ui.onSongIndex)
    .catch(ui.onCreateCommentSuccess)
}

const onDeleteComment = function (event) {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  const commentId = formData.commentId
  // const musicId = formData.musicId
  api.deleteComment(commentId, formData)
    .then(ui.onDeleteComment)
    .catch(ui.onDeleteCommentFailure)
}

module.exports = {
  onAddSong,
  onSongIndex,
  onUpdateSong,
  onDeleteSong,
  onCreateComment,
  onDeleteComment
}
