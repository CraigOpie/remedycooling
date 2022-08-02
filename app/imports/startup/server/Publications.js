import { Meteor } from 'meteor/meteor';
import { Roles } from 'meteor/alanning:roles';
import { User } from '../../api/user/User';

/** This subscription publishes only the documents associated with the logged in user */
Meteor.publish('User', function publish() {
  if (this.userId) {
    const username = Meteor.users.findOne(this.userId).username;
    return User.find({ email: username });
  }
  return this.ready();
});

/** This subscription publishes all documents regardless of user, but only if the logged in user is the Admin. */
Meteor.publish('UserAdmin', function publish() {
  if (this.userId && Roles.userIsInRole(this.userId, 'admin')) {
    return User.find();
  }
  return this.ready();
});

/** alanning:roles publication */
Meteor.publish(null, function () {
  if (this.userId) {
    return Meteor.roleAssignment.find({ 'user._id': this.userId });
  }
  return this.ready();
});
