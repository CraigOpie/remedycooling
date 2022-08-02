import React from 'react';
import { Grid, Header, Image } from 'semantic-ui-react';

/** Render a Not Found page if the user enters a URL that doesn't match any route. */
class NotFound extends React.Component {
  render() {
    return (
      <div className={'body'}>
        <div className='whiteBack'>
          <Grid container centered stackable columns={2}>
            <Grid.Row>
              <Header as={'h1'}>Page Not Found</Header>
            </Grid.Row>
            <Grid.Row>
              <Image src={'/images/logo.png'} size={'medium'} verticalAlign={'middle'} />
            </Grid.Row>
            <Grid.Row>
              {/* eslint-disable-next-line max-len */}
              <Header as={'h1'}>404 Error</Header>
            </Grid.Row>
            <Grid.Row style={{ height: '400px' }}>
            </Grid.Row>
          </Grid>
        </div>
      </div>
    );
  }
}

export default NotFound;
