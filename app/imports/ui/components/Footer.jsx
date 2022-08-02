import React from 'react';
import { Image, Grid, Header, Icon } from 'semantic-ui-react';

/** The Footer appears at the bottom of every page. Rendered by the App Layout component. */
class Footer extends React.Component {
  render() {
    const divStyle = { color: 'white', backgroundColor: '#2185d0', width: '100%', padding: '20px', flexShrink: 0 };
    return (
      <footer>
        <hr />
        <div style={divStyle} className="ui center aligned container">
          <Grid container centered stackable columns={3}>
            <Grid.Column textAlign={'center'} verticalAlign={'top'}>
              <Icon name={'clock outline'} size={'huge'}></Icon>
              <Header inverted as={'h2'}>HOURS</Header>
              <hr />
              <Header inverted as={'h3'}>24/7 Emergency Services</Header>
              <Grid container centered columns={2}>
                <Grid.Column textAlign={'center'}>
                  <Header inverted as={'h3'}>Mon-Fri {<br />}Sat-Sun</Header>
                </Grid.Column>
                <Grid.Column textAlign={'center'}>
                  <Header inverted as={'h3'}>8:00 am - 5:00 pm {<br />}On-Call</Header>
                </Grid.Column>
              </Grid>
            </Grid.Column>
            <Grid.Column textAlign={'center'} verticalAlign={'middle'}>
              <Image src={'/images/logo.png'} size={'small'} verticalAlign={'bottom'} /> <br />
              <br />Spring Hill, FL 34606<br />
              License No. CAC1821687
            </Grid.Column>
            <Grid.Column textAlign={'center'} verticalAlign={'top'}>
              <Icon name={'facebook messenger'} size={'huge'}></Icon>
              <Header inverted as={'h2'}>CONTACT US</Header>
              <hr />
              <Header inverted as={'h3'}>Phone: (352) 777-9854 {<br />}service@remedycooling.com</Header>
            </Grid.Column>
          </Grid>
        </div>
        <div style={divStyle} className="ui center aligned container">
          &copy; 2022 Remedy Heating & Cooling
        </div>
      </footer>
    );
  }
}

export default Footer;
