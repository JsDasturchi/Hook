import React, { useState } from "react";
import { data } from "./Mock";
import { Wrapper } from "./style";
export const Body = ({ students, onDelete }) => {
  // const [st, setSt] = useState(data || []);

  return (
    <Wrapper>
      {students.map((value) => {
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
