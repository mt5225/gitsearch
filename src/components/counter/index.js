import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addAction, removeAction } from "../../actions/CounterAction";

export default Counter = () => {
  const count = useSelector(state => state.counter.count);
  const dispatch = useDispatch();

  return (
    <main>
      <div>Count: {count}</div>
      <button onClick={() => dispatch(addAction())}>Add to count</button>
      <button onClick={() => dispatch(removeAction())}>Remove count</button>
    </main>
  );
};
