import React from 'react';
import PropTypes from 'prop-types';
import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';
import { withRouter, NavLink } from 'react-router-dom';
import { Menu, Dropdown, Image } from 'semantic-ui-react';
import { Roles } from 'meteor/alanning:roles';

/** The NavBar appears at the top of every page. Rendered by the App Layout component. */
class NavBar extends React.Component {
  render() {
    const menuStyle = { marginBottom: '10px' };
    return (
      <Menu style={menuStyle} color='blue' attached="top" borderless inverted>
        <Menu.Item as={NavLink} activeClassName="" exact to="/">
          <Image src={'/images/logo.png'} size={'mini'} verticalAlign={'bottom'} />
        </Menu.Item>
        {this.props.currentUser === '' ? (
          [<Menu.Item as={NavLink} activeClassName="active" exact to="/" key='home'>Home</Menu.Item>,
            <Menu.Item activeClassName="active" key='services'>
              <Dropdown text={'HVAC Services'} >
                <Dropdown.Menu>
                  <Dropdown.Item text={'AC Installation and Replacement'} as={NavLink} exact to={'/install'} />
                  <Dropdown.Item text={'AC Repair'} as={NavLink} exact to={'/repair'} />
                  <Dropdown.Item text={'Heating'} as={NavLink} exact to={'/heating'} />
                  <Dropdown.Item text={'Residential HVAC Maintenance Plans'} as={NavLink} exact to={'/pms'} />
                  <Dropdown.Item text={'Commercial HVAC Maintenance Plans'} as={NavLink} exact to={'/commercialhvacpms'} />
                  <Dropdown.Item text={'Commercial Refrigeration'} as={NavLink} exact to={'/commercialrefer'} />
                </Dropdown.Menu>
              </Dropdown>
            </Menu.Item>,
            <Menu.Item as={NavLink} activeClassName="active" exact to="/commercial" key='commercial'>Commercial</Menu.Item>,
            <Menu.Item as={NavLink} activeClassName="active" exact to="/about" key='about'>About</Menu.Item>,
            <Menu.Item as={NavLink} activeClassName="active" exact to="/contact" key='contact'>Contact</Menu.Item>]
        ) : ''}
        {Roles.userIsInRole(Meteor.userId(), 'admin') ? (
          <Menu.Item as={NavLink} activeClassName="active" exact to="/admin" key='admin'>Admin</Menu.Item>
        ) : ''}
        <Menu.Item position="right">
          {this.props.currentUser === '' ? (
            // eslint-disable-next-line react/jsx-key
            <Menu.Item key={'phone'}>(352) 777-9854</Menu.Item>
          ) : (
            <Dropdown text={this.props.currentUser} pointing="top right" icon={'user'}>
              <Dropdown.Menu>
                <Dropdown.Item icon="sign out" text="Sign Out" as={NavLink} exact to="/signout"/>
              </Dropdown.Menu>
            </Dropdown>
          )}
        </Menu.Item>
      </Menu>
    );
  }
}

/** Declare the types of all properties. */
NavBar.propTypes = {
  currentUser: PropTypes.string,
};

/** withTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker */
const NavBarContainer = withTracker(() => ({
  currentUser: Meteor.user() ? Meteor.user().username : '',
}))(NavBar);

/** Enable ReactRouter for this component. https://reacttraining.com/react-router/web/api/withRouter */
export default withRouter(NavBarContainer);
