import { Meteor } from 'meteor/meteor';
import { Chats } from '../chats';

Meteor.methods({
  newChat(chat) {
    Chats.insert(chat);
  }
});
