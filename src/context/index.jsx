import React from "react";
import OylikContext from "./Oylik";

export const Store = ({ children }) => {
  return <OylikContext>{children}</OylikContext>;
};

export default Store;
