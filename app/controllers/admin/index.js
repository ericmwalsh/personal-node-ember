import Ember from 'ember';

export default Ember.Controller.extend({
  session: Ember.inject.service('session'),

  actions: {
    invalidateSession(){
      let headers = {};

      this.get('session').authorize('authorizer:devise', (headerName, headerValue) => {
        let authorization_info = JSON.parse(headerValue);
        if (authorization_info["token"] != null && authorization_info["email"] != null) {
          headers["Auth-Token"] = authorization_info["token"];
        }
        headers["Device-Kind"] = "web";
      });

      var request = Ember.$.ajax({
        url:  "http://localhost:3000/admins/sign_out",
        type: 'DELETE',
        headers: headers
      });
      request.done((msg) => {
        this.get('session').invalidate();
      });
      request.fail(function( jqXHR, textStatus) {
        // this.get('session').invalidate();
      });
    }
  }
});
