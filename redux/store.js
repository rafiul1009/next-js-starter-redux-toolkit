import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { HYDRATE, createWrapper } from 'next-redux-wrapper';
import auth from "./slices/auth";
import common from "./slices/common";
// import message from "./slices/message";

const combinedReducer = combineReducers({
  auth,
  common,
  // message,
});

const rootReducer = (state, action) => {
  if (action.type === HYDRATE) {
    const nextState = {
      ...state, // use previous state
      // users: {
      //     users: [...action.payload.users.users, ...state.users.users]
      // }
    }
    return nextState;
  } else {
    return combinedReducer(state, action)
  }
}

export const store = configureStore({
  reducer: rootReducer,
});

export const makeStore = () => store;
export const wrapper = createWrapper(makeStore, { debug: false });
