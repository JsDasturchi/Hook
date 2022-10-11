import React, { useEffect, useState } from "react";
import { data } from "./Mock";
import { Wrapper } from "./style";
export const Body = ({ getData }) => {
  const [st, setSt] = useState(data || []);

  useEffect(() => {
    getData(st);
  }, [st]);

  const onDelete = (id) => {
    console.log(id);
    let res = st.filter((value) => value.id !== id);
    setSt(res);
  };
  return (
    <Wrapper>
      {st.map((value) => {
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
