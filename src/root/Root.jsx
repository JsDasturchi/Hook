import React, { useState } from "react";
import { Body } from "../components/Body";
import { Navbar } from "../components/Navbar";

export const Root = () => {
  const [data, setData] = useState([]);

  const getData = (info) => {
    setData(info);
    console.log(info, "info");
  };

  return (
    <div>
      <Navbar students={data} />
      <Body getData={getData} />
    </div>
  );
};
