import angular from 'angular';
import angularMeteor from 'angular-meteor';
import uiRouter from 'angular-ui-router';

import template from './chat.html';
import { Chats } from '../../../api/chats';
import { Users } from '../../../api/users';

class Chat {
  constructor($scope, $reactive) {
    'ngInject';

    $reactive(this).attach($scope);

    this.helpers({
      dataChats() {
        return Chats.find({});
      },
      dataUsers() {
        return Users.find({});
      }
    });

    this.inputChat = {};
    this.userChat = 'rizki mufrizal';
  }

  sendChat(chat) {
    chat.username = 'rizki mufrizal';
    chat.waktu = new Date();
    Chats.insert(chat);
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
  .config(function config($stateProvider) {
    'ngInject';

    $stateProvider
      .state('chat', {
        url: '/chat',
        template: '<chat></chat>'
      });
  });
