import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, reset } from "../slices/counterSlice";

const Counter = () => {
  const count = useSelector((state) => state.counter.value);

  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(increment());
  };
  const handleDecrement = () => {
    dispatch(decrement());
  };
  const handleReset = () => {
    dispatch(reset());
  };

  return (
    <div>
      <div className="counter-text">
        <span> Counter: {count}</span>
      </div>
      <div className="container">
        <button className="btn-one" onClick={handleIncrement}>
          INCREMENT
        </button>
        <button className="btn-two" onClick={handleDecrement}>
          DECREMENT
        </button>
        <button className="btn-three" onClick={handleReset}>
          RESET
        </button>
      </div>
    </div>
  );
};

export default Counter;
