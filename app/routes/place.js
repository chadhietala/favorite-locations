export default Ember.Route.extend({
  model: function () {
    return this.store.find( 'place' );
  },
  actions: {
    savePlace: function ( place ) {
      var place = this.store.createRecord( 'place',  place );
      place.save();
    }
  }
});