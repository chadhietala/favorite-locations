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
      newPlace.save();

    }
  }
});
