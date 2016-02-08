import Devise from 'ember-simple-auth/authorizers/devise';

const { isEmpty } = Ember;

export default Devise.extend({
  identificationAttributeName: 'email',

  authorize(data, block){
    const { tokenAttributeName, identificationAttributeName } = this.getProperties('tokenAttributeName', 'identificationAttributeName');
    const userToken          = data[tokenAttributeName];
    const userIdentification = data[identificationAttributeName];
    if (!isEmpty(userToken) && !isEmpty(userIdentification)) {
      const authData = `{\"${tokenAttributeName}\":"${userToken}", \"${identificationAttributeName}\":"${userIdentification}"}`;
      block('Authorization', `${authData}`);
    }
  },
});
