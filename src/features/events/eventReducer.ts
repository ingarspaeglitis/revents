import { sampleData } from "../../app/api/sampleData";
import { Action, Reducer } from "redux";
import { CREATE_EVENT, UPDATE_EVENT, DELETE_EVENT } from "./eventConstants";

export interface InitialState {
    events: any;
}

const initialState: InitialState = {
    events: sampleData
}

export interface DispatchAction extends Action {
    payload: Partial<any>;
};

export const eventReducer: Reducer<any, DispatchAction> = (state = initialState, {type, payload}) => {
    switch (type) {
        case CREATE_EVENT:
            return {
                ...state,
                events: [...state.events, payload]
            };
        case UPDATE_EVENT:
            return {
                ...state,
                events: [...state.events.filter((event: any) => event.id !== payload.id ), payload]
            };
        case DELETE_EVENT:
            return {
                ...state,
                events: [...state.events.filter((event: any) => event.id !== payload )]
            };
        default:
            return state;
    }      
};
