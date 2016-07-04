import { Meteor } from 'meteor/meteor';
import { Chats } from '../api/chats';

Meteor.startup(() => {
  Chats.remove({});
  Meteor.users.remove({});
});
