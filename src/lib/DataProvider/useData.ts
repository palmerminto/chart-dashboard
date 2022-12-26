import { useContext, createContext } from "react";
import { DataContextProps } from "./DataProviderProps";

export const useData = () => useContext(DataContext);

export const DataContext = createContext<DataContextProps>({});
