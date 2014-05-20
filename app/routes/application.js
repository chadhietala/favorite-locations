export default Ember.Route.extend({
  actions: {
    createNewPlace: function (place) {

      var newPlace = this.store.createRecord('place', {
        address: place.formatted_address,
        name: place.name,
        loc: {
          lat: place.geometry.location.ob,
          lng: place.geometry.location.pb
        }
      });

      newPlace.save().then(function() {
        this.controllerFor('place').setProperties({
          currentLng: place.geometry.location.pb,
          currentLat: place.geometry.location.ob,
          currentAddr: place.formatted_address
        });
      }.bind(this));
    }
  }
});
