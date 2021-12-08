import {
    UPDATE_PROPERTY
} from './types';


export const updateProperty = (data) => async (dispatch) => {
  try {
    dispatch({
        type: UPDATE_PROPERTY,
        payload: data
      });
  } catch (err) {
    console.log(err)
  }
};