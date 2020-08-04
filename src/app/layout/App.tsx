import React from 'react';
import EventDashboard from '../../features/events/eventDashboard/EventDashboard';
import NavBar from '../../features/nav/NavBar';
import { Container } from 'semantic-ui-react';
import { Route } from 'react-router-dom';
import HomePage from '../../features/home/HomePage';
import EventDetailedPage from '../../features/events/eventDashboard/EventDetailedPage';
import EventForm from '../../features/events/eventForm/EventForm';
import Sandbox from '../../features/sandbox/Sandbox';

export default function App() {
  return (
    <>
      <Route exact path='/' component={ HomePage }></Route>
      <Route path={ '/(.+)'}
            render={() => (
              <>
                <NavBar></NavBar>
                <Container className='main'>
                  <Route exact path='/events' component={EventDashboard}></Route>
                  <Route exact path='/sandbox' component={Sandbox}></Route>
                  <Route path='/events/:id' component={EventDetailedPage}></Route>
                  <Route path={['/createEvent', '/manage/:id']} component={EventForm}></Route>
                </Container> 
              </>
            )}>
      </Route>          
    </>
  );
}

