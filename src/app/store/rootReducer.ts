import { testReducer } from './../../features/sandbox/testReducer';
import { eventReducer } from './../../features/events/eventReducer';
import { combineReducers} from 'redux'; 

const rootReducer = combineReducers({
    test: testReducer,
    event: eventReducer
});

export default rootReducer;