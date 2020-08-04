import { CREATE_EVENT, UPDATE_EVENT, DELETE_EVENT } from './eventConstants';

export function createEvent(event: any) {
    return {
        type: CREATE_EVENT,
        payload: event
    }
}

export function updateEvent(event: any) {
    return {
        type: UPDATE_EVENT,
        payload: event
    }
}

export function deleteEvent(eventId: any) {
    return {
        type: DELETE_EVENT,
        payload: eventId
    }
}