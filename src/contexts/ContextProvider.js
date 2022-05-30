import React, { createContext, useContext, useState } from "react";

const StateContext = createContext();

const initialState = {
  chat: false,
  cart: false,
  userProfile: false,
  notification: false,
};

export const ContextProvider = ({ children }) => {
  const [activeMenu, setActiveMenu] = useState(true);
  return (
    <StateContext.ContextProvider value={{ activeMenu }}>{children}</StateContext.ContextProvider>
  );
};

export const useStateContext = () => useContext(StateContext);

export default ContextProvider;
