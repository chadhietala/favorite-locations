export default Ember.Controller.extend({
  newAddress: '',
  needs: ['places'],
  actions: {
    /**
     * Creates a new place record then sets the
     * current lat, lng and address on the places
     * @param  {[type]} place [description]
     * @return {[type]}       [description]
     */
    createNewPlace: function (place) {

      var newPlace = this.store.createRecord('place', {
        address: place.formatted_address,
        name: place.name,
        loc: {
          lat: place.geometry.location.lat(),
          lng: place.geometry.location.lng()
        }
      });

      newPlace.save().then(function() {

        this.get('controllers.places').setProperties({
          currentLng: newPlace.get('loc.lng'),
          currentLat: newPlace.get('loc.lat'),
          currentAddr: newPlace.get('address')
        });

        this.set('newAddress', '');

      }.bind(this));


    }
  }
});