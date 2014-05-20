var path = require( 'path' );
var rootPath = path.normalize( __dirname + '/..' );

module.exports = {
  development: {
    db: 'mongodb://localhost/favorite-locations',
    rootPath: rootPath,
    app: {
      name: 'Favorite Locations'
    }
  },
  production: {
    db: process.env.MONGOLAB_URI || process.env.MONGOHQ_URL,
    rootPath: rootPath,
    app: {
      name: 'Favorite Locations'
    }
  }
};