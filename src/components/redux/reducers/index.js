import { combineReducers } from 'redux';
import { filters } from '../reducers/filters';
import { pizzas } from '../reducers/pizzas';

export const rootReducer = combineReducers({
  filters,
  pizzas,
});
