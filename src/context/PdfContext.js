import { createContext, useContext, useState } from "react";

const PdfContext = createContext();

export const PdfProvider = ({ children }) => {
  const [document, setDocument] = useState(null);

  const value = { document, setDocument };

  return <PdfContext.Provider value={value}>{children}</PdfContext.Provider>;
};

export const usePdf = () => useContext(PdfContext);
