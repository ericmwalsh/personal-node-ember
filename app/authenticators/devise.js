import ENV from 'node-ember/config/environment';
import Devise from 'ember-simple-auth/authenticators/devise';

export default Devise.extend({
  resourceName: 'admin',
  serverTokenEndpoint: ENV["adminEndpoint"],
});
