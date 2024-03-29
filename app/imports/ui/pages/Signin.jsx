import React from 'react';
import PropTypes from 'prop-types';
import { Roles } from 'meteor/alanning:roles';
import { Link, Redirect } from 'react-router-dom';
import { Container, Form, Grid, Header, Message, Image } from 'semantic-ui-react';
import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';
import swal from 'sweetalert';
import { User } from '../../api/user/User';

/**
 * Signin component is similar to signup component, but we create a new user instead.
 */
class Signin extends React.Component {
  /** Initialize state fields. */
  constructor(props) {
    super(props);
    this.state = { email: '', password: '', error: '', redirectToReferer: false };
  }

  /** Update the form controls each time the user interacts with them. */
  handleChange = (e, { name, value }) => {
    this.setState({ [name]: value });
  };

  /** Handle Signin submission. Create user account and a profile entry, then redirect to the home page. */
  submit = () => {
    const { email, password } = this.state;
    Meteor.loginWithPassword(email, password, (err) => {
      if (err) {
        this.setState({ error: err.reason });
      } else {
        this.setState({ error: '', redirectToReferer: true });
      }
    });
  };

  /** Display the signup form. Redirect to home page after successful registration and login. */
  render() {
    const isAdmin = Roles.userIsInRole(Meteor.userId(), 'admin');
    const { from } = this.props.location.state || { from: { pathname: '/home' } };
    // if correct authentication, redirect to from: page instead of signup screen
    if (this.state.redirectToReferer) {
      if (isAdmin) {
        return <Redirect to={'/admin'}/>;
      }
      if (User.findOne({}).isBanned === true) {
        swal('Sorry!', 'Your account has been locked, please contact Admin to see the details.', 'error');
        return <Redirect to={'/signout'}/>;
      }
      return <Redirect to={from}/>;
    }
    return (
      <Container fluid className={'whiteBack'} style={{ paddingLeft: '130px', paddingRight: '130px', marginTop: '-10px' }}>
        <Image src={'/images/logo.png'} size={'small'} centered style={{ paddingBottom: '-12px', paddingTop: '50px' }}/>
        <Header as="h1" textAlign="center" style={{ color: '#000000', paddingBottom: '35px' }}>
            Welcome
        </Header>
        <Grid relaxed style={{ paddingTop: '25px' }} textAlign="center" verticalAlign="middle" centered
          columns={'equal'}>
          <Grid.Column>
            <Form onSubmit={this.submit}>
              <Form.Input
                label="Email Address"
                icon="mail"
                iconPosition="left"
                name="email"
                type="email"
                placeholder="you@domain.com"
                onChange={this.handleChange}
              />
              <Form.Input
                style={{ paddingBottom: '5px' }}
                label="Password"
                icon="lock"
                iconPosition="left"
                name="password"
                placeholder="Password"
                type="password"
                onChange={this.handleChange}
              />
              <Form.Button
                fluid
                style={{ color: 'white', backgroundColor: '#ba3216' }}
                disabled={!this.state.email || !this.state.password}
                content="SIGN IN"
              />
            </Form>
            {this.state.error === '' ? (
              ''
            ) : (
              <Message
                error
                header="Signin was not successful"
                content={this.state.error}
              />
            )}
          </Grid.Column>
        </Grid>
        <Container fluid className={'whiteLanding'} style={{ height: '400px', paddingLeft: '130px', paddingRight: '130px', marginTop: '-10px' }}>
        </Container>
      </Container>
    );
  }
}

/** Ensure that the React Router location object is available in case we need to redirect. */
Signin.propTypes = {
  location: PropTypes.object,
};

export default withTracker(() => {
  // Get access to Schedule documents.
  const subscription = Meteor.subscribe('User');
  return {
    user: User.find({}).fetch(),
    ready: subscription.ready(),
  };
})(Signin);
