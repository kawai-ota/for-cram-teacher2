import React, { createContext, useContext, useState } from "react";

const StateContext = createContext({ activeMenu: true });

const initialState = {
  chat: false,
  userProfile: false,
};

export const ContextProvider = ({ children }: any) => {
  const [activeMenu, setActiveMenu] = useState(true);

  return (
    <StateContext.Provider
      value={{
        activeMenu,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
