export default Ember.ArrayController.extend({
  itemController: 'place',

  actions: {
    /**
     * Updates the map to reflect the new location
     * @param  {Object} place The new place
     * @return {Nil}
     */
    updateMap: function (place) {
      this.setProperties({
        currentLng: place.get('loc.lng'),
        currentLat: place.get('loc.lat'),
        currentAddr: place.get('address')
      });
    }
  }
});