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
    // data: {
    //   music: {
    //     title: {
    //       artist: {
    //         fav_song: {
    //         }
    //       }
    //     }
    //   }
    // }

  })
}

module.exports = {
  addSong
}
