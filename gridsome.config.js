// gridsome-config.js

// const { db } = require('gridsome-source-firestore')

module.exports = {
  plugins: [
    {
      use: 'gridsome-source-firestore',
      options: {
        credentials: require('./kontakt-lista-firebase-adminsdk-pneor-2441213898'), // Replace with your credentials file you downloaded.
        debug: true, // Default false, should be true to enable live data updates
        ignoreImages: false, // Default false
        imageDirectory: 'fg_images', // Default /fg_images
        collections: [ {
          ref: (db) => {
            return db.collection('artists')
          }
        }
        ]
      }
    }
  ],
  templates: {
    FireArtists: [
      {
        path: '/artists/:path',
        component: './src/templates/ArtistInfo.vue'
      }
    ]
  }
}