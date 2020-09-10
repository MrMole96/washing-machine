import * as t from "../actions/actionTypes";

const defaultState = [];

export default (state = defaultState, action) => {
  switch (action.type) {
    case t.ADD_USER:
      return [...state, action.user];
    case t.GET_USERS:
      return state;
    case t.UPDATE_USER:
      return state.map((x) => {
        if (x.id === action.user.id) {
          return {...x, ...action.user};
        }
        return x;
      });
    case t.DELETE_USER:
      return state.filter((x) => x.id !== action.id);
    default:
      return state;
  }
};
