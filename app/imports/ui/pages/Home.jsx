import React from 'react';
import { Container } from 'semantic-ui-react';
import Map from '../components/Map';

export default class Home extends React.Component {
  render() {
    return (
      <Container className={'topLanding'} textAlign={'center'} fluid style={{ marginTop: '-10px' }}>
        <Map id="map" />
      </Container>
    );
  }
}
