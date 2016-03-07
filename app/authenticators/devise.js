import ENV from 'node-ember/config/environment';
import Devise from 'ember-simple-auth/authenticators/devise';

const { RSVP, isEmpty, run, get } = Ember;

export default Devise.extend({
  resourceName: 'user',
  serverTokenEndpoint: ENV["adminEndpoint"] + "/sign_in/",

  authenticate(identification, password) {
    return new RSVP.Promise((resolve, reject) => {
      const { resourceName, identificationAttributeName } = this.getProperties('resourceName', 'identificationAttributeName');
      const data         = {};
      data[resourceName] = { password };
      data[resourceName][identificationAttributeName] = identification;

      this.makeRequest(data).then(function(response) {
        run(null, resolve, response);
      }, function(xhr) {
        run(null, reject, xhr.responseJSON || xhr.responseText);
      });
    });
  },
  // overridden to add 'Device-Kind' header
  makeRequest(data) {
    const serverTokenEndpoint = this.get('serverTokenEndpoint');
    return Ember.$.ajax({
      url:      serverTokenEndpoint,
      type:     'POST',
      dataType: 'json',
      data,
      beforeSend(xhr, settings) {
        xhr.setRequestHeader('Accept', settings.accepts.json);
        xhr.setRequestHeader('Device-Kind', 'web');
      }
    });
  }
});
