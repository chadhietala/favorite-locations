/*globals google*/
export default Ember.Component.extend({
  tagName: 'input',
  attributeBindings: ['placeholder', 'value'],
  placeholder: 'Add A New Location',
  classNames: 'form-control',
  address: null,
  createGeoCoder: function () {
    this.autocomplete = new google.maps.places.Autocomplete(this.$()[0], {});

    google.maps.event.addListener(this.autocomplete, 'place_changed', this.placeChanged.bind(this));
  }.on( 'didInsertElement' ),

  placeChanged: function () {
    var place = this.autocomplete.getPlace();
    this.sendAction('action', place);
  }

});