import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  title: DS.attr(),
  topic: DS.attr(),
  desc: DS.attr()
});
