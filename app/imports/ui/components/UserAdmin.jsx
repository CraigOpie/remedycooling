import React from 'react';
import { Table, Image, Checkbox } from 'semantic-ui-react';
import PropTypes from 'prop-types';

/** Renders a single row in the List Users (Admin) table. */
class UserAdmin extends React.Component {
  render() {
    return (
      <Table.Row>
        <Table.Cell>{this.props.user.email}</Table.Cell>
        <Table.Cell>{this.props.user.firstName}</Table.Cell>
        <Table.Cell>{this.props.user.lastName}</Table.Cell>
        <Table.Cell>{this.props.user.company}</Table.Cell>
        <Table.Cell><Image src={this.props.user.image} size='mini' /></Table.Cell>
        <Table.Cell>{this.props.user.mobileNumber}</Table.Cell>
        <Table.Cell>{this.props.user.carrier}</Table.Cell>
        <Table.Cell><Checkbox toggle checked={this.props.user.isBanned} /></Table.Cell>
      </Table.Row>
    );
  }
}

/** Require a document to be passed to this component. */
UserAdmin.propTypes = {
  user: PropTypes.shape({
    email: PropTypes.string,
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    company: PropTypes.string,
    image: PropTypes.string,
    mobileNumber: PropTypes.string,
    carrier: PropTypes.string,
    isBanned: PropTypes.bool,
    _id: PropTypes.string,
  }).isRequired,
};

export default UserAdmin;
