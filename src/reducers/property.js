import {
    GET_PROPERTY, UPDATE_PROPERTY
  } from '../actions/types';
  
  const initialState = {
      data: {}
  };
  
  export default function (state = initialState, action) {
    const { type, payload } = action;
    switch (type) {
      case UPDATE_PROPERTY:
        return {
            ...state,
            data: payload
        };
      default:
        return state;
    }
  }