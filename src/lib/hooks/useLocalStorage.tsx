import { useState, Dispatch, SetStateAction } from "react";

// Hook
export function useLocalStorage<T>(
  key: string,
  initialValue?: T,
): [T, Dispatch<SetStateAction<T>>] {
  // State to store our value
  // Pass initial state function to useState so logic is only executed once
  const [storedValue, setStoredValue] = useState<T>(() => {
    try {
      // Get from local storage by key
      return getStoredValue<T>(key, initialValue);
    } catch (error) {
      // If error also return initialValue
      console.error(error);
      return initialValue;
    }
  });

  // Return a wrapped version of useState's setter function that ...
  // ... persists the new value to localStorage.
  const setValue: Dispatch<SetStateAction<T>> = value => {
    try {
      // Save state
      setStoredValue(value);
      // Allow value to be a function so we have same API as useState
      const valueToStore =
        value instanceof Function ? value(storedValue) : value;
      // Save to local storage
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      // A more advanced implementation would handle the error case
      console.error(error);
    }
  };

  return [storedValue, setValue];
}
export function getStoredValue<T>(key: string, initialValue: T | undefined) {
  const item = window.localStorage.getItem(key);
  // Parse stored json or if none return initialValue
  return item ? JSON.parse(item) : initialValue;
}
