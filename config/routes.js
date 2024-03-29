var placeController = require( '../api/controllers/place' );
var catchAllController = require( '../api/controllers/catch_all' );

module.exports = function ( app ) {
  app.get('/api/places', placeController.index);
  app.post('/api/places', placeController.createPlace);
  app.delete('/api/places/:id', placeController.removePlace);
  app.put('/api/places/:id', placeController.updatePlace);
  app.get('*', catchAllController.index);
};