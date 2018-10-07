import { combineReducers } from 'redux';
import outcomeReducer from './outcomes';
import currentDeliveryReducer from './currentDelivery';

export default combineReducers({
  outcomes:outcomeReducer,
  currentDelivery:currentDeliveryReducer
});