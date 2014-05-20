/*globals google*/
export default Ember.Component.extend({

  locationChanged: function () {
    Ember.run.once(function () {
      this.marker.setMap(null);
      this.createMarker();
      this.map.setCenter( this.get('center') );
    }.bind(this));

  }.observes( 'center' ),

  center: function() {
    return new google.maps.LatLng(
      this.get( 'latitude' ),
      this.get( 'longitude' )
    );
  }.property('latitude', 'longitude'),

  createMarker: function () {
    this.marker = new google.maps.Marker({
      position: this.get( 'center' ),
      map: this.map,
      animation: google.maps.Animation.DROP,
      title: this.get( 'address' )
    });
  },

  createMap: function () {
    var options = {
      zoom: 15,
      center: this.get('center'),
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    this.map = new google.maps.Map( document.getElementById('map-canvas'), options );

    this.createMarker();

  }.on( 'didInsertElement' )
});