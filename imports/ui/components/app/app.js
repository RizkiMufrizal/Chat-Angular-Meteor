import { Meteor } from 'meteor/meteor';
import angular from 'angular';
import angularMeteor from 'angular-meteor';
import uiRouter from 'angular-ui-router';

import template from './app.html';
import { name as Home } from '../home/home';
import { name as Chat } from '../chat/chat';
import { name as User } from '../user/user';

class App {
  constructor($scope, $reactive, $state) {
    'ngInject';

    $reactive(this).attach($scope);
    _state = $state;

    this.helpers({
      userLogin() {
        return Meteor.userId();
      }
    });
  }

  logout() {
    var user = Meteor.users.findOne(Meteor.userId());

    Meteor.users.update(
      {
        _id: user._id
      }, {
        $set: {
          profile: {
            status: 'offline'
          }
        }
      }
    );
    Meteor.logout();
    _state.go('user');
  }
}

const name = 'app';

export default angular.module(name, [
  angularMeteor,
  uiRouter,
  Chat,
  Home,
  User
])
  .component(name, {
    template,
    controllerAs: name,
    controller: App
  })
  .config(function($locationProvider, $urlRouterProvider) {
    'ngInject';

    $locationProvider.html5Mode(true);
    $urlRouterProvider.otherwise('/');
  })
  .run(function($rootScope, $state) {
    'ngInject';

    $rootScope.$on('$stateChangeError',
      (event, toState, toParams, fromState, fromParams, error) => {
        if (error === 'AUTH_REQUIRED') {
          $state.go('user');
        }
      }
    );
  });
