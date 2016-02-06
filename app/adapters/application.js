import DS from 'ember-data';
import DataAdapterMixin from 'ember-simple-auth/mixins/data-adapter-mixin';

export default DS.JSONAPIAdapter.extend(DataAdapterMixin, {
  headers: {
    "Device-Kind": "web"
  },
  session: Ember.inject.service('session'),
  authorizer: 'authorizer:devise',


});
