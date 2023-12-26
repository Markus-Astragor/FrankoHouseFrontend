import { createContext, useContext } from "react";

export type GlobalContent = {
  language: string;
  setLanguage: (c: string) => void;
};
export const LanguageContext = createContext<GlobalContent>({
  language: "ua",
  setLanguage: () => {},
});

export const useLanguageContext = () => useContext(LanguageContext);
