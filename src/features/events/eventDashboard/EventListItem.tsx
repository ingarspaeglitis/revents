import React from 'react';
import { Segment, Item, Icon, List, Button} from 'semantic-ui-react';
import EventListAttendee from './EventListAttendee';

interface EventListItemProps {
    event: any;
}

const EventListItem: React.SFC<EventListItemProps> = ({event}) => {
    return (
       <Segment.Group>
           <Segment>
               <Item.Group>
                    <Item>
                        <Item.Image size='tiny' circular src={ event.hostPhotoURL} ></Item.Image>
                        <Item.Content>
                            <Item.Header content={ event.title}>
                            </Item.Header>
                            <Item.Description>
                                Hosted by { event.hostedBy}                               
                            </Item.Description>
                        </Item.Content>
                    </Item>
               </Item.Group>
           </Segment>
           <Segment>
               <span>
                   <Icon name='clock'></Icon> { event.date}  
                   <Icon name='marker'></Icon> { event.venue} 
               </span>
           </Segment>
           <Segment secondary>
                <List horizontal>
                    { event.attendees.map((attendee: any) => (
                        <EventListAttendee attendee={ attendee} key={ attendee.id}/>
                        )) 
                    }                 
                </List>
           </Segment>
           <Segment clearing>
               <div>
                   { event.description}                  
               </div>
               <Button color='teal' floated='right' content='View' />               
           </Segment>
       </Segment.Group>
    );
}

export default EventListItem;