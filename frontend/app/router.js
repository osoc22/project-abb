import EmberRouter from '@ember/routing/router';
import config from 'frontend/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('four-oh-four', { path: '/*path' });
  this.route('index', { path: '/' });
  this.route('dashboard');

  this.route('municipality', { path: '/gemeente/:mun_id' }, function () {
    this.route('info');
    this.route('decisions', { path: '/beslissingen' });
    this.route('decision', { path: '/beslissing/:decision_id' });
    this.route('subscribe');
  });
  this.route('wat-zijn-belastingen');
  this.route('hoe-worden-beslissingen-genomen');
  this.route('subscribe');
});
