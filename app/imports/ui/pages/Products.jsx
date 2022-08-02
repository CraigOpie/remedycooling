import React from 'react';
import { Container, Grid, Header, Image } from 'semantic-ui-react';

export default class Home extends React.Component {
  render() {
    return (
      <div className={'body'}>
        <div className='whiteBack'>
          <Grid container textAlign={'center'} stackable columns={2}>
          </Grid>
        </div>
      </div>
    );
  }
}
