import angular from 'angular';
import angularMeteor from 'angular-meteor';
import uiRouter from 'angular-ui-router';

import template from './about.html';

const name = 'about';

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
      .state('about', {
        url: '/about',
        template: '<about></about>'
      });
  });
