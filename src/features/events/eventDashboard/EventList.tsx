import React from 'react';
import EventListItem from './EventListItem';

interface EventListProps {
    events: any;
}

const EventList: React.SFC<EventListProps> = ({events}) => {
    return (
        <>
            { events.map((event: any) => (
                <EventListItem event={ event} key={ event.id}/>
                )) 
            }
        </>      
    );
}

export default EventList;