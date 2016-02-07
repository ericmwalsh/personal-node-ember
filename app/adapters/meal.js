import Ember from 'ember';
import ENV from 'node-ember/config/environment';
import DS from 'ember-data';
import DataAdapterMixin from 'ember-simple-auth/mixins/data-adapter-mixin';

export default DS.JSONAPIAdapter.extend(DataAdapterMixin, {
  headers: {
    "Device-Kind": "webzz"
  },
  host: ENV["mealEndpoint"],
  namespace: 'v1',
  session: Ember.inject.service('session'),
  authorizer: 'authorizer:devise',


});
