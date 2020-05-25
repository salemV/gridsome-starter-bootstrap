module.exports = function (api) {
    api.loadSource(actions => {
        const songs = actions.addCollection({
            typeName: 'Favorites'
        })
        songs.addNode({
            name: 'Naslov',
            song: 'Ime pjesme'
        })
    })
  }
  