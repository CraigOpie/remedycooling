import React from 'react';
import { List, Grid, Header, Image, Card, Form, Button } from 'semantic-ui-react';
import Map from '../components/Map';

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
          <Grid container textAlign='center' stackable columns={2}>
            <Grid.Row>
              <Header as={'h1'}>About Remedy</Header>
            </Grid.Row>
            <Grid.Row>
              <Image src={'/images/logo.png'} size={'medium'} verticalAlign={'middle'} />
            </Grid.Row>
            <Grid.Row>
              {/* eslint-disable-next-line max-len */}
              <Header as={'h3'}>Remedy is a family owned and operated company based out of Spring Hill, Florida. We specialize in servicing, repairing and installing all types & sizes of HVAC-R equipment. Our goal at Remedy is to make your experience with us a pleasant one. We take many things into account anytime we are given a task, communication, repair time & quality of work are among the top things we take into consideration with each customer. Our experienced team allows us to tackle any project no matter the size. Here at Remedy, we will always do the right thing for both the customer and the employee. Choose Remedy for your HVAC-R needs, satisfaction guaranteed.</Header>
            </Grid.Row>
            <Grid.Row style={{ height: '400px' }}>
              <Grid.Column>
                <Header as={'h1'}>Commercial HVAC-R</Header>
                <Header as={'h2'}>Coverage Across the State of Florida</Header>
                <List bulleted>
                  <List.Item>Diagnostics</List.Item>
                  <List.Item>Repairs</List.Item>
                  <List.Item>Installations</List.Item>
                  <List.Item>Energy Saving Maintenance Programs</List.Item>
                  <List.Item>Ice Machine Service & Maintenance Programs</List.Item>
                </List>
              </Grid.Column>
              <Grid.Column>
                <Header as={'h1'}>Residential HVAC</Header>
                <Header as={'h2'}>Coverage Hernando, Pasco, and Pinellas Counties</Header>
                <List bulleted>
                  <List.Item>Diagnostics</List.Item>
                  <List.Item>Repairs</List.Item>
                  <List.Item>Installations</List.Item>
                  <List.Item>Energy Saving Maintenance Programs</List.Item>
                </List>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </div>
        <Map id="map" />
      </div>
    );
  }
}
