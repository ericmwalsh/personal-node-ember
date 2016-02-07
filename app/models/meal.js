import Ember from 'ember';
import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  description: DS.attr('string'),
  cost: DS.attr('number'),
  prepTime: DS.attr('number'),
  createdAt: DS.attr('date')
});
