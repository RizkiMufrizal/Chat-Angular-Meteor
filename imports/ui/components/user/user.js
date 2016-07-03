import { Meteor } from 'meteor/meteor';
import angular from 'angular';
import angularMeteor from 'angular-meteor';
import uiRouter from 'angular-ui-router';

import template from './user.html';

class User {
  constructor($scope, $reactive, $state) {
    'ngInject';

    $reactive(this).attach($scope);
    _state = $state;

    this.inputUserSignIn = {};
    this.inputUserSignUp = {};
  }

  register(user) {
    Accounts.createUser(user, function(error) {
      if (error) {
        console.log(error);
      }
      this.inputUserSignUp = {};
      alert('anda berhasil register, silahkan login');
    });
  }

  loginUser(user) {
    Meteor.loginWithPassword(user.username, user.password, function(error) {
      if (typeof error !== 'undefined') {
        alert(error.reason);
      } else {
        alert('berhasil login');
        _state.go('chat');
      }
    });
  }

}

const name = 'user';

export default angular.module(name, [
  angularMeteor,
  uiRouter
])
  .component(name, {
    template,
    controllerAs: name,
    controller: User
  })
  .config(function($stateProvider) {
    'ngInject';

    $stateProvider
      .state('user', {
        url: '/authentication',
        template: '<user></user>'
      });
  });
