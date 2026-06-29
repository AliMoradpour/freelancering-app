import { useEffect, useState } from "react";

export default function useLocalStorageState({ key, initialState = false }: { key: string; initialState?: string | boolean }) {
  const [value, setValue] = useState(() => {
    const storedValue = localStorage.getItem(key);
    return storedValue ? JSON.parse(storedValue) : initialState;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [value, key]);

  return [value, setValue];
}
