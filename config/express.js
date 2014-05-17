var express = require( 'express' );
var bodyParser = require('body-parser');
var path = require( 'path' );

module.exports = function ( app, config ) {
  var staticAssets = path.resolve('dist/assets');
  app.use( bodyParser() );
  app.set( 'showStackError', true );
  app.use( '/assets', express.static( staticAssets ) );
};