import Ember from 'ember';

const { service } = Ember.inject;

export default Ember.Controller.extend({
  session: service('session'),
  actions: {
    authenticate: function() {
      let { email, password } = this.getProperties('email', 'password');
      return this.get('session').authenticate('authenticator:devise', email, password)
        .then(function(value) {
          // fulfillment
        }, function(reason) {
          // rejection
        })
        .catch((reason) => {
          this.set('errorMessage', reason.error);
        });
    }
  }
});
