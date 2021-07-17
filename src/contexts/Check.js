import React, { createContext, useState, useContext } from "react";

const CheckContext = createContext();

export function CheckProvider({ children }) {
  const [checked, setChecked] = useState();

  return (
    <CheckContext.Provider
      value={{
        checked,
        setChecked,
      }}
    >
      {children}
    </CheckContext.Provider>
  );
}

export function useChecked() {
  const context = useContext(CheckContext);
  const { checked, setChecked } = context;
  return { checked, setChecked };
}
