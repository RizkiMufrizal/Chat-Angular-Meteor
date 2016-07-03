import { Meteor } from 'meteor/meteor';
import angular from 'angular';
import angularMeteor from 'angular-meteor';
import uiRouter from 'angular-ui-router';

import template from './chat.html';
import { Chats } from '../../../api/chats';

class Chat {
  constructor($scope, $reactive) {
    'ngInject';

    $reactive(this).attach($scope);

    Meteor.subscribe('chats');
    Meteor.subscribe('users');

    this.helpers({
      dataChats() {
        return Chats.find({});
      },
      dataUsers() {
        return Meteor.users.find({});
      }
    });

    this.inputChat = {};
    this.userId = Meteor.userId();
  }

  sendChat(chat) {
    var user = Meteor.users.findOne(Meteor.userId());
    chat.username = user.username;
    chat.userId = Meteor.userId();
    chat.waktu = new Date();
    Meteor.call('newChat', chat, (error) => {
      if (error) {
        console.log(error);
      }
    });
    this.inputChat = {};
  }

}

const name = 'chat';

export default angular.module(name, [
  angularMeteor,
  uiRouter
])
  .component(name, {
    template,
    controllerAs: name,
    controller: Chat
  })
  .config(function($stateProvider) {
    'ngInject';

    $stateProvider
      .state('chat', {
        url: '/chat',
        template: '<chat></chat>',
        resolve: {
          currentUser($q) {
            if (Meteor.userId() === null) {
              return $q.reject('AUTH_REQUIRED');
            } else {
              return $q.resolve();
            }
          }
        }
      });
  });
