import React from "react";
import { useCounter } from "../hooks/useCounter";

export const CounterWithCustomHook = () => {
  const { counter, increment, decrement, reset } = useCounter();

  return (
    <div>
      <h1>Counter with Hook: {counter}</h1>
      <hr />

      <button className="btn btn-primary mx-1" onClick={() => decrement()}>
        -1
      </button>
      <button className="btn btn-primary mx-1" onClick={reset}>
        Reset
      </button>
      <button className="btn btn-primary mx-1" onClick={() => increment(2)}>
        +1
      </button>
    </div>
  );
};
