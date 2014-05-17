var express = require( 'express' ),
    path = require( 'path' );

module.exports = function ( app, config ) {
  var staticAssets = path.resolve('dist/assets');
  app.set( 'showStackError', true );
  app.use( '/assets', express.static( staticAssets ) );
};