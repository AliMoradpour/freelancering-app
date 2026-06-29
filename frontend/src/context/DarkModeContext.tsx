import { createContext, useContext, useEffect, type ReactNode } from "react";
import useLocalStorageState from "../hooks/useLocalStorageState";

interface DarkModeContextType {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}
const DarkModeContext = createContext<DarkModeContextType | undefined>(undefined);

export default function DarkModeProvider({ children }: { children: ReactNode }) {
  const [isDarkMode, setIsDarkMode] = useLocalStorageState({
    key: "isDarkMode",
    initialState: window.matchMedia("(prefer-color-scheme: dark)").matches,
  });
  const toggleDarkMode = () => setIsDarkMode((prev: boolean) => !prev);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  return <DarkModeContext.Provider value={{ isDarkMode, toggleDarkMode }}>{children}</DarkModeContext.Provider>;
}

export function useDarkMode() {
  const context = useContext(DarkModeContext);

  if (context === undefined) throw new Error("DarkModeContext was used outside of DarkModeProvider");

  return context;
}
