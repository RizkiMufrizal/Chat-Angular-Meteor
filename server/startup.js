import { Meteor } from 'meteor/meteor';
import { Chats } from '../imports/api/chats';

Meteor.startup(() => {
  Chats.remove({});
});

Meteor.publish('chats', function() {
  return Chats.find();
});

Meteor.publish('users', function() {
  return Meteor.users.find();
});

Meteor.users.allow({
  insert(userId, party) {
    return userId;
  },
  update(userId, party, fields, modifier) {
    return userId;
  }
});

Chats.allow({
  insert(userId, chat) {
    return userId && chat.userId === userId;
  }
});

Meteor.methods({
  newChat(chat) {
    Chats.insert(chat);
  }
});
