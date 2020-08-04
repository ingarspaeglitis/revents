import { Action } from "redux";
import { Reducer } from "react";

export const incrementCounter = 'incrementCounter';
export const decrementCounter = 'decrementCounter';

export interface InitialState {
    data: number;
}

export const initialState: any = {
    data: 42
};

export interface DispatchAction extends Action {
    payload: Partial<any>;
};

export const testReducer: Reducer<any, DispatchAction> = (state = initialState, action) => {
    switch (action.type) {
        case incrementCounter:
            return {
                ...state,
                data: state.data + 1
            };
        case decrementCounter:
            return {
                ...state,
                data: state.data - 1
            };
        default:
            return state;
    }      
};
