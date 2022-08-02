import React from 'react';
import { Container } from 'semantic-ui-react';

export default class Home extends React.Component {
  render() {
    return (
      <Container className={'whiteLanding'} textAlign={'center'} fluid >
        <div id={'Schedule1'} style={{ height: '100%' }}></div>
        <div style={{ height: '500px' }}></div>
      </Container>
    );
  }
}
