import axios from 'axios';

import {
  BASE_URL,
  REQUEST_SPACES,
  RECEIVE_SPACES
} from "./types";

export const fetchSpaces = (limit = 100) => async dispatch => {
  try {
    dispatch({ type: REQUEST_SPACES });
    const res = await axios.get(`${BASE_URL}/launches?limit=${limit}`);
    dispatch({ type: RECEIVE_SPACES, payload: res.data });
  } catch(e) {
    console.log(e);
    dispatch({ type: RECEIVE_SPACES, payload: [] });
  }
};