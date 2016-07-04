import { Mongo } from 'meteor/mongo';

export const Chats = new Mongo.Collection('chats');

Chats.allow({
  insert(userId, chat) {
    return userId && chat.userId === userId;
  }
});
