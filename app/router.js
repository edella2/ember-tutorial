import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

//When generating a route ember maps to it automatically
Router.map(function() {
  this.route('about');
  this.route('contact');
});

export default Router;
