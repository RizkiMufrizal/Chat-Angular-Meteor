import { Meteor } from 'meteor/meteor';
import { Chats } from '../imports/api/chats';

Meteor.startup(() => {
  Chats.remove({});
  Meteor.users.remove({});
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
