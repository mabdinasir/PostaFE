import { useCallback } from "react";

const useLocalStorage = () => {
  const getLocalStorage = useCallback((key: string) => {
    const localState = localStorage.getItem(key);
    return localState;
  }, []);

  const getBooleanLocalStorage = useCallback(
    (key: string, defaultValue = false) => {
      const localState = localStorage.getItem(key);
      switch (localState) {
        case "true":
          return true;
        case "false":
          return false;
        default:
          return defaultValue;
      }
    },
    []
  );

  const setLocalStorage = useCallback((key: string, value: string) => {
    localStorage.setItem(key, value);
  }, []);

  return { getLocalStorage, getBooleanLocalStorage, setLocalStorage };
};

export default useLocalStorage;
