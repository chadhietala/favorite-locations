export default Ember.ArrayController.extend({
  sortBy: ['createdAt'],
  sortAcending: true,

  actions: {
    updateMap: function (place) {
      this.setProperties({
        currentLng: place.get('loc.lng'),
        currentLat: place.get('loc.lat'),
        currentAddr: place.get('address')
      });
    }
  }
});