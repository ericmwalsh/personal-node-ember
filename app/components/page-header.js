import Ember from 'ember';

export default Ember.Component.extend({

  becomeFocused: function() {
    this.$("nav.navbar-fixed-top.navbar").autoHidingNavbar();
  }.on('didRender')

});
