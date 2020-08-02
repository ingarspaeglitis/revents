import React from 'react';
import EventDashboard from '../../features/events/eventDashboard/EventDashboard';
import NavBar from '../../features/nav/NavBar';

export default function App() {
  return (
    <div>
      <NavBar></NavBar>
      <EventDashboard></EventDashboard>
    </div>
  );
}

