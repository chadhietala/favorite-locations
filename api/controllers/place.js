var mongoose = require( 'mongoose' );
var Place = mongoose.model( 'Place' );



exports.index = function ( req, res ) {
  Place.find( {} , function(err, places) {
    res.json({places: places});
  });
};

exports.createPlace = function ( req, res ) {
  var body = req.body.place;

  var place = new Place({
    name: body.name,
    address: body.address,
    loc: {
      lng: body.loc.lng,
      lat: body.loc.lat
    },
    createdAt: body.createdAt
  });

  place.save(function(err) {
    if (err) {
      console.log( err )
    } else  {
      res.json(req.body);
    }
  });
};

exports.removePlace = function ( req, res ) {
  var id = req.params.id;
  console.log(Place.find( { _id: id }))
  Place.find( { _id: id }).remove(function () {
    res.json({});
  });
};