import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Container, Table, Header, Loader } from 'semantic-ui-react';
import { withTracker } from 'meteor/react-meteor-data';
import PropTypes from 'prop-types';
import { User } from '../../api/user/User';
import UserAdmin from '../components/UserAdmin';

/** Renders a table containing all of the Stuff documents. Use <StuffItem> to render each row. */
class ListUsersAdmin extends React.Component {

  /** If the subscription(s) have been received, render the page, otherwise show a loading icon. */
  render() {
    return (this.props.ready) ? this.renderPage() : (
      <Container className={'topLanding'} textAlign={'center'} fluid style={{ marginTop: '-10px' }}>
        <Loader active>Getting data</Loader>;
      </Container>
    );
  }

  /** Render the page once subscriptions have been received. */
  renderPage() {
    return (
      <Container className={'topLanding'} textAlign={'center'} fluid style={{ marginTop: '-10px' }}>
        <Header as="h2">List Users (Admin)</Header>
        <Table celled>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Email</Table.HeaderCell>
              <Table.HeaderCell>First Name</Table.HeaderCell>
              <Table.HeaderCell>Last Name</Table.HeaderCell>
              <Table.HeaderCell>Company</Table.HeaderCell>
              <Table.HeaderCell>Image</Table.HeaderCell>
              <Table.HeaderCell>Cell Phone</Table.HeaderCell>
              <Table.HeaderCell>Carrier</Table.HeaderCell>
              <Table.HeaderCell>Banned</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {this.props.users.map((user) => <UserAdmin key={user._id} user={user} />)}
          </Table.Body>
        </Table>
      </Container>
    );
  }
}

// Require an array of Schedule documents in the props.
ListUsersAdmin.propTypes = {
  users: PropTypes.array.isRequired,
  ready: PropTypes.bool.isRequired,
};

// withTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker
export default withTracker(() => {
  const subscription = Meteor.subscribe('UserAdmin');
  const ready = subscription.ready();
  const users = User.find({}).fetch();
  return {
    users,
    ready,
  };
})(ListUsersAdmin);
