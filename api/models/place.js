var mongoose = require( 'mongoose' ),
    Schema = mongoose.Schema;

var PlaceSchema = new Schema({
  loc: {
    lat: Number,
    lng: Number
  },
  name: String,
  address: String,
  createdAt: Number
});

mongoose.model( 'Place', PlaceSchema );

