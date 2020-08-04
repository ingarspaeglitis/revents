import React from 'react';
import { Grid} from 'semantic-ui-react';
import EventList from './EventList';
import EventForm from '../eventForm/EventForm';
import { useSelector } from 'react-redux';

export default function EventDashboard() {

    const {events} = useSelector<any, any>((state: any) => {
        return  state.event
    });

    return (
        <Grid>
            <Grid.Column width={ 10 }>
                <EventList events={ events }></EventList>
            </Grid.Column>
            <Grid.Column width={ 6 }>
                <EventForm></EventForm>
            </Grid.Column>
        </Grid>
    );
}