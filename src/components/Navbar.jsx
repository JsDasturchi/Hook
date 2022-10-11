import React from "react";
import { Container, Item } from "./style";

export const Navbar = ({ students }) => {
  return (
    <Container>
      <Item>Students {students?.length || 0}</Item>
      <Item>Home</Item>
      <Item>About</Item>
      <Item>Contact</Item>
      <Item>Info</Item>
    </Container>
  );
};
