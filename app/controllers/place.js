export default Ember.ArrayController.extend({
  sortBy: ['createdAt'],
  sortAcending: true,
  isEditing: false,

  actions: {
    updateMap: function (place) {
      this.setProperties({
        currentLng: place.get('loc.lng'),
        currentLat: place.get('loc.lat'),
        currentAddr: place.get('address')
      });
    },
    cancel: function ( place ) {
      place.rollback();
      this.set( 'isEditing', false );
    },
    editPlace: function () {
      this.set( 'isEditing', true );
    }
  }
});