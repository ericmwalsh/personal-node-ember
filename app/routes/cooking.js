import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    // return this.store.find('user', this.get('user'));
    return this.store.findAll('meal');
  }
});
