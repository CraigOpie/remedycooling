import React from 'react';
import { Button, Card, Form, Grid, Header, Image, List } from 'semantic-ui-react';

export default class Home extends React.Component {
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
        <div className='whiteBack'>
          <Grid container textAlign={'center'} verticalAlign={'middle'} stackable columns={2}>
            <Grid.Column>
              <Header as={'h1'}>Professional Commercial Sales, Installations, and Repairs</Header>
              {/* eslint-disable-next-line */}
              <Header as={'h3'}>Remedy Heating & Cooling are the trusted HVAC contenders that ensure your customers and employees are comfortable, without exception.  We provide exceptional service at affordable prices to support your project's needs.</Header>
              {/* eslint-disable-next-line */}
              <Header as={'h3'}>We extend the life or your equipment while maximizing system up-time by providing a complete system preventive maintenance plan to keep your customers and employees comfortable year round.  More information is located in our HVAC Services dropdown menu.</Header>
              {/* eslint-disable-next-line */}
              <Header as={'h3'}>We offer installation and repairs for rooftop units, central units, wall or window units, new and replacement systems or existing projects.  Call today for more information.</Header>
            </Grid.Column>
            <Grid.Column>
              <Image src={'/images/roof.jpeg'} size={'large'} verticalAlign={'middle'} />
            </Grid.Column>
          </Grid>
        </div>
      </div>
    );
  }
}
