export default Ember.Route.extend({
  model: function () {
    return this.store.find( 'place' );
  },

  actions: {
    savePlace: function ( place ) {
      var newPlace = this.store.createRecord( 'place',  place );
      newPlace.save();
    }
  }
});