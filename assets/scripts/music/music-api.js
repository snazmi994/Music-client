const config = require('../config')
const store = require('../store')

const addSong = function (formData) {
  return $.ajax({
    method: 'POST',
    url: config.apiUrl + '/music',
    data: formData,
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

const songIndex = function () {
  return $.ajax({
    method: 'GET',
    url: config.apiUrl + '/music',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

const updateSong = function (id, formData) {
  return $.ajax({
    method: 'PATCH',
    url: config.apiUrl + '/music/' + id,
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    data: formData

  })
}

const deleteSong = function (id) {
  return $.ajax({
    method: 'DELETE',
    url: config.apiUrl + '/music/' + id,
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

module.exports = {
  addSong,
  songIndex,
  updateSong,
  deleteSong
}
