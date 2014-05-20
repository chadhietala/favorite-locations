export default Ember.ObjectController.extend({
  isEditing: false,
  actions: {

    /**
     * Sets the place into editing mode. Tells
     * the parent controller what the current
     * items lat, lng and adress is to update
     * the map accordingly.
     * @return {Nil}
     */
    editPlace: function () {
      this.send('updateMap', this.get('model'));
      this.set('isEditing', true);
    },

    /**
     * Updates the current place when the
     * user presses save.
     * @return {Nil}
     */
    updatePlace: function () {
      this.get('model').save();
      this.set('isEditing', false);
    },

    /**
     * Rollsback the model to the un-dirty
     * state and takes the ui out of the
     * editing state.
     * @return {Nil}
     */
    cancel: function () {
      this.get('model').rollback();
      this.set( 'isEditing', false );
    },

    /**
     * Removes the model from the ui and
     * then persists to the backend.
     * @return {Nil}
     */
    removePlace: function () {
      var place = this.get('model');
      place.deleteRecord();
      place.save();
    }
  }
});