import React, { useContext, useState } from "react";
import { OylikContext } from "../../context/Oylik";

import { Container, Item } from "../style";

export const Navbar = () => {
  const [data, setData] = useContext(OylikContext);
  console.log(data);
  return (
    <Container>
      <Item>Students {data?.length || 0}</Item>
      <Item>Home</Item>
      <Item>About</Item>
      <Item>Contact</Item>
      <Item>Info</Item>
    </Container>
  );
};
