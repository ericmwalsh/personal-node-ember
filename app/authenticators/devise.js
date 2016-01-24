import Devise from 'ember-simple-auth/authenticators/devise';

export default Devise.extend({
  resourceName: 'admin',
  serverTokenEndpoint: 'http://localhost:3000/admins/sign_in'
});
