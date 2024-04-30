
// REDUX STORE OF THE APPLICATION

// IMPORT REDUX
import { createStore, combineReducers } from 'redux';

// INITIAL STATE
const initialState = {};

// ROOT REDUCER
const rootReducer = (state = initialState, action) => { return state; };
// state: current state of the Redux store, initialized with a default value of `initialState`, which likely represents the initial state of your application.
// action: the action dispatched to the Redux store. Actions are objects that describe the intention to change the state. They typically have a `type` property that describes the action type and may include additional data as needed.

// REDUX STORE
const store = createStore(rootReducer);

export default store;

/**
 * INTRODUCING ADDITIONAL REDUCER
 * [1] import { combineReducers } from 'redux'
 * [2] import/locate existing reducer(s) existingReducer
 * [3] const newReducer = (state = {}, action) => {
 *    // Handle actions for the new part of application
 *    return state;
 * }
 * [4] combine reducers:
 *    const rootReducer = combineReducers({
 *        existing: existingReducer,
 *        new: newReducer
 *    })
 * [5] create the store:
 *    const store = createStore(rootReducer);
 */