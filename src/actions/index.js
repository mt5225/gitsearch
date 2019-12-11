export const getUser = username => {
  return {
    type: "FETCH_USER",
    payload: username
  };
};
