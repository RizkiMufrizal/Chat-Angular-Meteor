import angular from 'angular';
import angularMeteor from 'angular-meteor';
import uiRouter from 'angular-ui-router';

import template from './chat.html';

const name = 'chat';

export default angular.module(name, [
  angularMeteor,
  uiRouter
])
  .component(name, {
    template,
  })
  .config(function config($stateProvider) {
    'ngInject';

    $stateProvider
      .state('chat', {
        url: '/chat',
        template: '<chat></chat>'
      });
  });
