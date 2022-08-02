import React from 'react';
import { Grid, Card, Form, Header, List, Icon, Button, Image } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';
import Map from '../components/Map';

/** A simple static component to render some text for the landing page. */
class Landing extends React.Component {
  render() {
    const divStyle = { verticalAlign: 'middle', height: '500px', backgroundColor: 'rgba(0, 0, 0, 0.65)' };
    return (
      <div className={'body'}>
        <div className='topLanding'>
          <Grid container centered stackable columns={2}>
            <Grid.Row>
              <Grid.Column textAlign={'center'} verticalAlign={'middle'} style={divStyle}>
                {/* eslint-disable-next-line react/no-unescaped-entities */}
                <Header as={'h1'} inverted style={{ padding: '30px' }}>Central Florida's HVAC Provider</Header>
                <Image src={'/images/logo.png'} size={'small'} verticalAlign={'middle'} />
                <List bulleted size={'large'} style={{ color: 'white' }}>
                  <List.Item>Free Quotes</List.Item>
                  <List.Item>Veteran Discount</List.Item>
                  <List.Item>First Responder Discount</List.Item>
                </List>
                <Header as={'h1'} inverted>(352) 777-9854</Header>
              </Grid.Column>
              <Grid.Column textAlign='left'>
                <Card fluid style={{ height: '500px' }}>
                  <Card.Content>
                    <Card.Header>Request a Quote</Card.Header>
                    {/* eslint-disable-next-line max-len */}
                    <Card.Description>Fill out this short form and a Remedy representative will contact you the same business day. Quotes are free for new installs.</Card.Description>
                    <Form>
                      <Form.Group widths={'equal'}>
                        <Form.Field>
                          <label>Name</label>
                          <input placeholder={'John Smith'} />
                        </Form.Field>
                        <Form.Field>
                          <label>Email</label>
                          <input placeholder={'john.smith@gmail.com'} />
                        </Form.Field>
                      </Form.Group>
                      <Form.Field>
                        <label>Phone</label>
                        <input placeholder={'727-555-5555'} />
                      </Form.Field>
                      <Form.Field>
                        <label>Message</label>
                        <textarea placeholder={'Please tell me more about...'} />
                      </Form.Field>
                      <Button type={'submit'} color={'blue'} size={'big'}>Submit</Button>
                    </Form>
                  </Card.Content>
                </Card>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </div>
        <div className={'whiteLanding'}>
          <Grid container centered stackable columns={2} style={{ width: '100%' }}>
            <Grid.Row textAlign={'centered'} verticalAlign={'middle'}>
              <Grid.Column style={{ width: '40%' }}>
                <Header as={'h1'}>Remedy is Your HVAC Solution</Header>
                {/* eslint-disable-next-line */}
                <Header as={'h3'}>We offer residential and commercial services throughout central Florida with over twenty years of HVAC experience.  Our services include heating, cooling, installation and replacement, emergency repairs, and free quotes. We are licensed and insured.</Header>
                {/* eslint-disable-next-line */}
                <Header as={'h3'}>Our state-of-the-art online scheduling tools allow for quick and easy interaction around the clock.</Header>
                <Button size={'big'} color={'blue'} as={NavLink} exact to="/contact" key='contact'>Schedule Service</Button>
              </Grid.Column>
              <Grid.Column style={{ width: '60%' }}>
                <Card.Group centered itemsPerRow={3} fluid>
                  <Card fluid style={{ backgroundColor: '#003056' }}>
                    <Icon inverted name={'wrench'} size={'huge'} style={{ padding: '20px 0px 0px 20px' }}/>
                    {/* eslint-disable-next-line max-len */}
                    <Card.Header as={'h2'} style={{ color: 'white', padding: '10px 20px 0px 20px' }}>Service Calls</Card.Header>
                    {/* eslint-disable-next-line */}
                    <Card.Header style={{ color: 'white', padding: '0px 20px 20px 20px' }}>Our customers are our neighbors and friends.  Our promise is to maintain you're systems up and running to keep your family and customers happy and safe.</Card.Header>
                    <Button attached={'bottom'} fluid size={'medium'} color={'yellow'}>Schedule Service</Button>
                  </Card>
                  <Card fluid style={{ backgroundColor: '#03417a' }}>
                    <Icon inverted name={'building outline'} size={'huge'} style={{ padding: '20px 0px 0px 20px' }}/>
                    {/* eslint-disable-next-line max-len */}
                    <Card.Header as={'h2'} style={{ color: 'white', padding: '10px 20px 0px 20px' }}>New Installs</Card.Header>
                    {/* eslint-disable-next-line */}
                    <Card.Header style={{ color: 'white', padding: '0px 20px 20px 20px' }}>Fair, affordable, and friendly service combined with nearly three decades of experience installing premium quality products in residential and businesses.</Card.Header>
                    <Button attached={'bottom'} fluid size={'medium'} color={'yellow'}>Get Estimate</Button>
                  </Card>
                  <Card fluid style={{ backgroundColor: '#00a1d9' }}>
                    <Icon inverted name={'calendar check outline'} size={'huge'} style={{ padding: '20px 0px 0px 20px' }}/>
                    {/* eslint-disable-next-line max-len */}
                    <Card.Header as={'h2'} style={{ color: 'white', padding: '10px 20px 0px 20px' }}>Maintenance</Card.Header>
                    {/* eslint-disable-next-line */}
                    <Card.Header style={{ color: 'white', padding: '0px 20px 20px 20px' }}>Extend the life of your home or business system while maximizing its capability. We provided preventative and emergency services to keep you comfortable.</Card.Header>
                    <Button attached={'bottom'} fluid size={'medium'} color={'yellow'}>Schedule Service</Button>
                  </Card>
                </Card.Group>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </div>
        <div className={'greyLanding'}>
          <Grid container centered stackable columns={2} style={{ width: '100%' }}>
            <Grid.Row verticalAlign={'middle'}><br />
              <Header as={'h1'} textAlign='center' style={{ color: '#03417A' }}>Services Overview</Header>
              <Card.Group centered itemsPerRow={3} fluid style={{ width: '100%' }}>
                <Card fluid style={{ backgroundColor: 'white' }}>
                  <Card.Content textAlign={'left'}>
                    {/* eslint-disable-next-line max-len */}
                    <Card.Header floated={'left'} style={{ color: '#03417A' }}><Icon name={'building'} size={'large'} color={'blue'} />Business Solutions</Card.Header>
                    {/* eslint-disable-next-line max-len */}
                    <Card.Header floated={'left'} style={{ color: '#03417A', paddingTop: '10px' }}></Card.Header>
                  </Card.Content>
                  <Button attached={'bottom'} fluid size={'medium'} color={'blue'}>More Details</Button>
                </Card>
                <Card fluid style={{ backgroundColor: 'white' }}>
                  <Card.Content textAlign={'left'}>
                    {/* eslint-disable-next-line max-len */}
                    <Card.Header floated={'left'} style={{ color: '#03417A' }}><Icon name={'home'} size={'large'} color={'blue'} />Residential Solutions</Card.Header>
                    {/* eslint-disable-next-line max-len */}
                    <Card.Header floated={'left'} style={{ color: '#03417A', paddingTop: '10px' }}></Card.Header>
                  </Card.Content>
                  <Button attached={'bottom'} fluid size={'medium'} color={'blue'}>More Details</Button>
                </Card>
                <Card fluid style={{ backgroundColor: 'white' }}>
                  <Card.Content textAlign={'left'}>
                    {/* eslint-disable-next-line max-len */}
                    <Card.Header floated={'left'} style={{ color: '#03417A' }}><Icon name={'file alternate outline'} size={'large'} color={'blue'} />On-Site Free Quotes</Card.Header>
                    {/* eslint-disable-next-line max-len */}
                    <Card.Header floated={'left'} style={{ color: '#03417A', paddingTop: '10px' }}></Card.Header>
                  </Card.Content>
                  <Button attached={'bottom'} fluid size={'medium'} color={'blue'}>More Details</Button>
                </Card>
                <Card fluid style={{ backgroundColor: 'white' }}>
                  <Card.Content textAlign={'left'}>
                    {/* eslint-disable-next-line max-len */}
                    <Card.Header floated={'left'} style={{ color: '#03417A' }}><Icon name={'shield alternate'} size={'large'} color={'blue'} />Efficient and Reliable Products</Card.Header>
                    {/* eslint-disable-next-line max-len */}
                    <Card.Header floated={'left'} style={{ color: '#03417A', paddingTop: '10px' }}></Card.Header>
                  </Card.Content>
                  <Button attached={'bottom'} fluid size={'medium'} color={'blue'}>More Details</Button>
                </Card>
                <Card fluid style={{ backgroundColor: 'white' }}>
                  <Card.Content textAlign={'left'}>
                    {/* eslint-disable-next-line max-len */}
                    <Card.Header floated={'left'} style={{ color: '#03417A' }}><Icon name={'drivers license'} size={'large'} color={'blue'} />HVAC License No: CAC1821687</Card.Header>
                    {/* eslint-disable-next-line max-len */}
                    <Card.Header floated={'left'} style={{ color: '#03417A', paddingTop: '10px' }}></Card.Header>
                  </Card.Content>
                  <Button attached={'bottom'} fluid size={'medium'} color={'blue'}>More Details</Button>
                </Card>
                <Card fluid style={{ backgroundColor: 'white' }}>
                  <Card.Content textAlign={'left'}>
                    {/* eslint-disable-next-line max-len */}
                    <Card.Header floated={'left'} style={{ color: '#03417A' }}><Icon name={'check square outline'} size={'large'} color={'blue'} />Service All Makes and Models</Card.Header>
                    {/* eslint-disable-next-line max-len */}
                    <Card.Header floated={'left'} style={{ color: '#03417A', paddingTop: '10px' }}></Card.Header>
                  </Card.Content>
                  <Button attached={'bottom'} fluid size={'medium'} color={'blue'}>More Details</Button>
                </Card>
              </Card.Group>
            </Grid.Row>
          </Grid>
        </div>
        <div className={'whiteLanding'}>
          <Grid container centered stackable columns={2} style={{ width: '100%' }}>
            <Grid.Row floated={'left'} verticalAlign={'middle'} style={{ height: '400px' }}>
              <Grid.Column className={'contentOne'} >
              </Grid.Column>
              <Grid.Column textAlign='left'>
                <Header as={'h1'} style={{ padding: '0px 20px 20px 0px' }}>AC Installation and Replacement</Header>
                <Header as={'h3'}>Expert AC replacement in existing homes</Header>
                {/* eslint-disable-next-line max-len */}
                <Header as={'h3'} style={{ padding: '0px 20px 30px 0px' }}>Remedy can help you choose the right unit for your new residence or we can promptly replace your old HVAC with a new reliable unit. Count on us for prompt AC installation services.</Header>
                <Button type={'submit'} color={'blue'} size={'big'} >Learn More</Button>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row verticalAlign={'middle'} style={{ height: '400px' }}>
              <Grid.Column textAlign='right'>
                <Header as={'h1'} style={{ padding: '0px 0px 20px 20px' }}>AC Repair</Header>
                <Header as={'h3'}>Prompt and efficient AC repair</Header>
                {/* eslint-disable-next-line max-len */}
                <Header as={'h3'} style={{ padding: '0px 0px 30px 20px' }}>Our techs can resolve even the most unusual service problems. Whether it’s a snake coiled up in the outdoor motor or a high voltage issue that has turned the heater electronics into a pile of plastic, we can fix it.</Header>
                <Button type={'submit'} color={'blue'} size={'big'} >Learn More</Button>
              </Grid.Column>
              <Grid.Column className={'contentTwo'} >
              </Grid.Column>
            </Grid.Row>
            <Grid.Row verticalAlign={'middle'} style={{ height: '400px' }}>
              <Grid.Column className={'contentThree'} >
              </Grid.Column>
              <Grid.Column textAlign='left'>
                <Header as={'h1'} style={{ padding: '0px 20px 20px 0px' }}>Heating</Header>
                <Header as={'h3'}>Contact us for our expert heating services</Header>
                {/* eslint-disable-next-line max-len */}
                <Header as={'h3'} style={{ padding: '0px 20px 30px 0px' }}>We service all makes and models of heating systems, such as heat pumps, hot-water heating systems and gas-fired and electric forced hot air systems. Our focus is on making sure that you have a great experience. </Header>
                <Button type={'submit'} color={'blue'} size={'big'} >Learn More</Button>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </div>
        <Map id="map" />
      </div>
    );
  }
}

export default Landing;
