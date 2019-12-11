import { takeLatest, put, all } from "redux-saga/effects";

function* fetchUser(action) {
  const user = action.payload.replace(/\s/g, "");
  const url = `https://api.github.com/users/${user}`;
  try {
    const data = yield fetch(url).then(response => response.json());
    console.log(data);
    if (data.message === "Not Found") {
      throw new Error("No such user");
    } else {
      yield put({ type: "FETCHED_USER", data: data });
    }
  } catch (e) {
    yield put({ type: "RECEIVE_ERROR" });
  }
}

function* fetchUserWatcher() {
  yield takeLatest("FETCH_USER", fetchUser);
}

export default function* rootSaga() {
  yield all([fetchUserWatcher()]);
}
