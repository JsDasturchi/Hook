import React, { useState, useReducer } from "react";

const Hook = () => {
  const [count, setCount] = useState(0);
  const [son, setSon] = useState(1);
  const reducer = (state, { type, payload }) => {
    console.log(type);
    switch (type) {
      case "plus":
        return { ...state, count: state + 1 };
      case "minus":
        return { ...state, count: state - 1 };
      case "bymount":
        return { ...state, count: state.count + state.amount };
      case "changeAmount":
        return { ...state, amount: payload };
      default:
        return state;
    }
  };
  const [info, dispatch] = useReducer(reducer, { count: 0, amount: 0 });

  const plus = () => setCount(count + 1);
  const minus = () => setCount(count - 1);

  const onSelect = ({ target: { value } }) => {
    console.log(value);
    setSon(value);
  };
  return (
    <div>
      <h1>Hooks Component useReducer</h1>
      <h1>State {count}</h1>
      <button onClick={plus}>+</button>
      <button onClick={minus}>-</button>
      <hr />
      <h1>Reducer {info.count}</h1>
      <button onClick={() => dispatch({ type: "plus" })}>+</button>
      <button onClick={() => dispatch({ type: "minus" })}>-</button>
      <button onClick={() => dispatch({ type: "bymount", payload: son })}>
        {info.amount}
      </button>
      <select
        defaultValue={1}
        onChange={({ target: { value } }) => {
          dispatch({ type: "changeAmount", payload: Number(value) });
        }}
        name=""
        id=""
      >
        <option value={1}>1</option>
        <option value={2}>2</option>
        <option value={3}>3</option>
        <option value={4}>4</option>
        <option value={5}>5</option>
      </select>
      <button onClick={() => dispatch({ type: "minus" })}>-</button>
    </div>
  );
};

export default Hook;
