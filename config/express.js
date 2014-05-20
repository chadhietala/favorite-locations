var express = require( 'express' );
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var path = require( 'path' );

module.exports = function ( app, config ) {
  var staticAssets = path.resolve('dist/assets');
  app.use( bodyParser() );
  app.use( methodOverride() );
  app.set( 'showStackError', true );
  app.use( '/assets', express.static( staticAssets ) );
};