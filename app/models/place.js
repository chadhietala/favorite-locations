export default DS.Model.extend({
  name: DS.attr( 'string' ),
  address: DS.attr( 'string' ),
  loc: DS.attr(),
  createdAt: DS.attr( 'number', {
    defaultValue: function () { return new Date().getTime(); }
  })
});