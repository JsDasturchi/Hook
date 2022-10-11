import React, { useEffect, useState, useContext } from "react";
import { OylikContext } from "../../context/Oylik";
import { Wrapper } from "../style";
export const Body = () => {
  const [data, setData] = useContext(OylikContext);
  console.log(data);

  const onDelete = (id) => {
    console.log(id);
    let res = data.filter((value) => value.id !== id);
    setData(res);
  };

  return (
    <Wrapper>
      {data.map((value) => {
        return (
          <div key={value.id}>
            {value.id}
            {value.name}
            <button onClick={() => onDelete(value.id)}>Delete</button>
          </div>
        );
      })}
    </Wrapper>
  );
};
