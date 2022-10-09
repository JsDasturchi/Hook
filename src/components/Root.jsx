import React, { useState } from "react";
import { Body } from "./Body";
import { Navbar } from "./Navbar";

export const Root = () => {
  const [students, setStudents] = useState([
    { id: 1, name: "Dostonbek", status: "va" },
    { id: 2, name: "Avazbek", status: "ab" },
    { id: 3, name: "Laziz", status: "al" },
    { id: 4, name: "Kamol", status: "ak" },
    { id: 5, name: "Nodir", status: "an" },
    { id: 6, name: "Olim", status: "ao" },
  ]);

  const onDelete = (id) => {
    console.log(id);
    let res = students.filter((value) => value.id !== id);
    setStudents(res);
  };

  return (
    <div>
      <Navbar students={students} />
      <Body students={students} onDelete={onDelete} />
    </div>
  );
};
