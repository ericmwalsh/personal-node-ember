import Ember from 'ember';

const { service } = Ember.inject;

export default Ember.Controller.extend({
  session: service('session'),
  actions: {
    // authenticate: function() {
    //   alert("Hey! I tried, but I don't know how to authenticate.");
    // }
    authenticate: function() {
      let { email, password } = this.getProperties('email', 'password');
      return this.get('session').authenticate('authenticator:devise', email, password).catch((reason) => {
        this.set('errorMessage', reason.error);
      });
    }
  }
});
