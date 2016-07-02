import angular from 'angular';
import angularMeteor from 'angular-meteor';
import uiRouter from 'angular-ui-router';

import template from './app.html';
import { name as Home } from '../home/home';

const name = 'app';

export default angular.module(name, [
  angularMeteor,
  uiRouter,
  Home
]).component(name, {
  template
}).config(config);

function config($urlRouterProvider) {
  'ngInject';

  $urlRouterProvider.otherwise('/home');
}
