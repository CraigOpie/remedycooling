import { Meteor } from 'meteor/meteor';
import { User } from '../../api/user/User';

/* eslint-disable no-console */
/** Initialize the database with a default data document. */
function addUser(data) {
  console.log(`  Adding: ${data.firstName}'s profile`);
  User.insert(data);
}

/** Initialize the collection if empty. */
if (User.find().count() === 0) {
  if (Meteor.settings.defaultUsers) {
    console.log('Creating default data.');
    Meteor.settings.defaultUsers.map(data => addUser(data));
  }
}
