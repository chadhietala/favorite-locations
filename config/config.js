var path = require( 'path' );
var rootPath = path.normalize( __dirname + '/..' );

module.exports = {
  development: {
    db: 'mongodb://localhost/favorite-locations',
    rootPath: rootPath,
    app: {
      name: 'Favorite Locations'
    }
  }
};