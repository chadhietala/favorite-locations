export default Ember.Route.extend({
  model: function () {
    return this.store.find( 'place' );
  },

  setupController: function (controller, model) {
    this._super(controller, model);
    var firstPlace = model.get('firstObject');
    controller.setProperties({
      currentLng: firstPlace.get('loc.lng'),
      currentLat: firstPlace.get('loc.lat'),
      currentAddr: firstPlace.get('address')
    });

  }
});