import DS from 'ember-data';
import DataAdapterMixin from 'ember-simple-auth/mixins/data-adapter-mixin';

const ApplicationAdapter = DS.JSONAPIAdapter.extend(DataAdapterMixin, {
  session: Ember.inject.service('session'),
  headers: {
    "Device-Kind": "web"
  },
  authorizer: 'authorizer:devise',


});

export default ApplicationAdapter;
