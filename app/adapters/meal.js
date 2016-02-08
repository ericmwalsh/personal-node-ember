import ApplicationAdapter from './application';
import ENV from 'node-ember/config/environment';

export default ApplicationAdapter.extend({
  host: ENV["mealEndpoint"],
  namespace: 'v1',


});
