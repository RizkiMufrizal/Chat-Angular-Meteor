import angular from 'angular';
import angularMeteor from 'angular-meteor';
import uiRouter from 'angular-ui-router';

import template from './app.html';
import { name as Home } from '../home/home';
import { name as Chat } from '../chat/chat';
import { name as User } from '../user/user';

const name = 'app';

export default angular.module(name, [
  angularMeteor,
  uiRouter,
  Chat,
  Home,
  User
])
  .component(name, {
    template
  })
  .config(function config($locationProvider, $urlRouterProvider) {
    'ngInject';

    $locationProvider.html5Mode(true);
    $urlRouterProvider.otherwise('/');
  });
