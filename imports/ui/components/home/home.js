import angular from 'angular';
import angularMeteor from 'angular-meteor';
import uiRouter from 'angular-ui-router';

import template from './home.html';

const name = 'home';

export default angular.module(name, [
  angularMeteor,
  uiRouter
])
  .component(name, {
    template,
  })
  .config(function($stateProvider) {
    'ngInject';

    $stateProvider
      .state('home', {
        url: '/',
        template: '<home></home>'
      });
  });
