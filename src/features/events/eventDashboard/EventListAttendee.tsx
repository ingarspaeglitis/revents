import React from 'react';
import { List, Image} from 'semantic-ui-react';

interface EventListAttendeeProps {
    attendee: any;
}
const EventListAttendee: React.SFC<EventListAttendeeProps> = ({attendee}) => {
    return (
       <List.Item>
           <Image size='mini' circular src={ attendee.photoURL } ></Image>
       </List.Item>
    );
}

export default EventListAttendee;