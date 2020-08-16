import {
  REQUEST_SPACES,
  RECEIVE_SPACES
} from "../action/types";

const INITIAL_STATE = {
  data: [],
  isFetching: false
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case REQUEST_SPACES: {
      return { ...state, isFetching: true };
    }
    case RECEIVE_SPACES: {
      return { ...state, isFetching: false, data: action.payload };
    }
    default:
      return state;
  }
};