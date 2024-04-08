import React from "react";
import { createContext, useState } from "react";

export const Context = createContext();

export const MessageContextProvider = ({ children }) => {
    const [user, setUser] = useState({});
    return (
      <Context.Provider value={{ user, setUser }}>
        {children}
      </Context.Provider>
    );
  };