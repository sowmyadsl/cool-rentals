import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  type: DS.attr(),
  date: DS.attr(),
  text: DS.attr()
});
