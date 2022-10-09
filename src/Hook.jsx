import React, { useState, useReducer } from "react";

const Hook = () => {
  const [count, setCount] = useState(0);
  const [son, setSon] = useState(1);
  const reducer = (state, { type, payload }) => {
    console.log(type);
    switch (type) {
      case "bymount":
        return state + Number(payload);
      case "plus":
        return state + 1;
      case "minus":
        return state - 1;
      default:
        return state;
    }
  };
  const [data, dispatch] = useReducer(reducer, 1);

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
      <h1>Reducer {data}</h1>
      <button onClick={() => dispatch({ type: "plus" })}>+</button>
      <button onClick={() => dispatch({ type: "bymount", payload: son })}>
        {son}
      </button>
      <select defaultValue={1} onClick={onSelect} name="" id="">
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
