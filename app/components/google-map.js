/*globals google*/
export default Ember.Component.extend({

  createMap: function () {
    // var center = new google.maps.LatLng(
    //   this.get( 'latitude' ),
    //   this.get( 'longitude' )
    // );


    var options = {
      zoom: 8,
      center: new google.maps.LatLng(-34.397, 150.644),
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };


     this.map = new google.maps.Map( document.getElementById('map-canvas'), options );


  }.on( 'didInsertElement' )
});