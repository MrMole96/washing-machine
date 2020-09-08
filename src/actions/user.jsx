import * as t from "./actionTypes";

export const addUser = (user) => {
  var id = Date.now();
  return {
    type: t.ADD_USER,
    user: { id, ...user },
  };
};

export const getUsers = () => ({
  type: t.GET_USERS,
});

export const updateUser = (user) => {
  return {
    type: t.UPDATE_USER,
    user,
  };
};

export const deleteUser = (id) => ({
  type: t.DELETE_USER,
  id,
});
