import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Container, Header, Image } from 'semantic-ui-react';

/** After the user clicks the "Signout" link in the NavBar, log them out and display this page. */
export default class Signout extends React.Component {
  render() {
    Meteor.logout();
    setTimeout(() => {
    if (window.location.href.includes('signout')) {                                                                     // eslint-disable-line
      window.location.href = window.location.href.replace('signout', '');                                               // eslint-disable-line
      }
    }, 1000);
    return (
      <Container className={'whiteBack'} textAlign={'center'} fluid style={{ marginTop: '-10px' }}>
        <Image src={'/images/logo.png'} size={'medium'} centered style={{ marginBottom: '-12px', marginTop: '50px' }}/>
        <Header id="signout-page" as="h2" textAlign="center">
          <p>Goodbye</p>
        </Header>
      </Container>
    );
  }
}
