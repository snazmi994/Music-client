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

const updateSong = function (formData) {
  return $.ajax({
    method: 'PATCH',
    url: config.apiUrl + '/music/',
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

const createComment = function (formData) {
  console.log(store.user)
  return $.ajax({
    method: 'POST',
    url: config.apiUrl + '/comments/',
    data: formData,
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    formData: formData
  })
}

const deleteComment = function (commentId, formData) {
  return $.ajax({
    method: 'DELETE',
    url: config.apiUrl + '/comments/' + commentId,
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    data: formData
  })
}

module.exports = {
  addSong,
  songIndex,
  updateSong,
  deleteSong,
  createComment,
  deleteComment
}
