var path = require( 'path' );

// Always just serve the index file
exports.index = function ( req, res ) {
  var index = path.resolve('dist/index.html');
  res.sendfile(index);
};