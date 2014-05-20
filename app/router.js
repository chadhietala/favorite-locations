var Router = Ember.Router.extend({
  rootURL: ENV.rootURL,
  location: 'auto'
});

Router.map(function() {
  this.resource('places', {path: '/'});
});

export default Router;
