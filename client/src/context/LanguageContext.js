import React, { createContext, useState } from 'react';

export const LangContext = createContext();

export default ({ children }) => {
  const [korean, setKorean] = useState(true);

  const language = {korean, setKorean};
  
  return <LangContext.Provider value={language}>{children}</LangContext.Provider>
}