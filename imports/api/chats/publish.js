import { Meteor } from 'meteor/meteor';
import { Chats } from './collection';

if (Meteor.isServer) {
  Meteor.publish('chats', function() {
    return Chats.find();
  });
}
