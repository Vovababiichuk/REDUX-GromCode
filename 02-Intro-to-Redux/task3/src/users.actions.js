export const addUser = (id, name) => {
  return {
    type: 'ADD_USER',
    payload: {
      id,
      name,
    },
  };
};

export const deleteUser = id => {
  return {
    type: 'DELETE_USER',
    payload: id,
  };
};
