import { useContext, createContext } from "react";

export const useData = () => useContext(DataContext);

export const DataContext = createContext<{}>({});
