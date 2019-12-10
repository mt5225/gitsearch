import store from "../store";
import { takeLatest } from "redux-saga";
import { call, put } from "redux-saga/effects";

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

function* fetchSaga() {
  yield* takeLatest("FETCH_USER", fetchUser);
}

export default fetchSaga;
