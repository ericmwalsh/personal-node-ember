import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('contact', function() {
    
  });
  this.route('cooking', function() {
    
  });
  this.route('growing', function() {
    
  });
  this.route('movies', function() {
    
  });
  this.route('music', function() {
    
  });
  this.route('pets', function() {
    this.route('jalapeno');
    this.route('nigel');
  });
  this.route('programming', function() {
    this.route('site-architecture');
  });
  this.route('writing', function() {
    
  });
  this.route('admin', function() {

  });
  this.route('login');
});

export default Router;
