import store from "../store";

export const fetch_post = () => {
  return {
    type: "FETCH_USER"
  };
};

export const receive_post = post => {
  return {
    type: "FETCHED_USER",
    data: post
  };
};

export const receive_error = () => {
  return {
    type: "RECEIVE_ERROR"
  };
};

/*
export const thunk_action_creator = username => {
  const user = username.replace(/\s/g, "");
  const url = `https://api.github.com/users/${user}`;
  store.dispatch(fetch_post());
  return dispatch => {
    fetch(url)
      .then(data => data.json())
      .then(response => {
        console.log(response);
        if (response.message === "Not Found") {
          throw new Error("user not found");
        } else {
          dispatch(receive_post(response));
        }
      })
      .catch(err => dispatch(receive_error()));
  };
};
*/
