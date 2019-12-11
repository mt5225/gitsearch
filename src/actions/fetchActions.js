import store from "../store";
import { takeLatest, call, put } from "redux-saga/effects";

function* fetchUser(username) {
  const user = username.replace(/\s/g, "");
  const url = `https://api.github.com/users/${user}`;
  try {
    const data = yield call(fetch, url);
    yield put({ type: "FETCHED_USER", data: data });
  } catch (e) {
    yield put({ type: "RECEIVE_ERROR" });
  }
}

function* fetchSaga(username) {
  yield* takeLatest("FETCH_USER", fetchUser(username));
}

export default fetchSaga;
