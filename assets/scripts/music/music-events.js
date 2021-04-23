const getFormFields = require('../../../lib/get-form-fields')
const api = require('./music-api')
const ui = require('./ui')

const onAddSong = function (event) {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  api.addSong(formData)
    .then(ui.onAddSongSuccess)
    .catch(ui.onAddSongFailure)
  console.log('this worked')
}

module.exports = {
  onAddSong
}
