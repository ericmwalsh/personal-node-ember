import Ember from 'ember';

export default Ember.Component.extend({
  session: Ember.inject.service('session'),

  becomeFocused: function() {
    this.$("nav.navbar-fixed-top.navbar").autoHidingNavbar();
  }.on('didRender')

});
