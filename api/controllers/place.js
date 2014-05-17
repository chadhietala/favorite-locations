var mongoose = require( 'mongoose' );
var Place = mongoose.model( 'Place' );



exports.index = function ( req, res ) {
  Place.find( {} , function(err, places) {
    res.json({places: places});
  });
};

exports.createPlace = function ( req, res ) {
  var place = new Place(req.body);
  place.save(function(err) {
    if (err) {
      console.log( err )
    } else  {
      res.json({place: req.body})
    }
  });
}