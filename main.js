var express = require( 'express' );
var fs = require( 'fs' );
var mongoose = require( 'mongoose' );

var env = process.env.NODE_ENV || 'development';
var config = require( './config/config' )[ env ];
var modelsPath = __dirname + '/api/models';
var app;
var port;

// Connect mongodb
mongoose.connect( config.db );

// Require all the models
fs.readdirSync( modelsPath ).forEach( function ( file ) {
  if ( ~file.indexOf('.js') ) {
    require( modelsPath + '/' + file );
  }
});

app = express();

require( './config/express' )( app, config );
require( './config/routes' )( app );

port = process.env.PORT || 3000;

app.listen( port );

console.log( 'Express app running on ' + port );

exports = module.exports = app;