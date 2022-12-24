import { FunctionComponent } from "react";
import { DataProviderProps } from "./DataProviderProps";
import { DataContext } from "./useData";

export const DataProvider: FunctionComponent<DataProviderProps> = (
  props
) => {
  return (
    <DataContext.Provider value={{}}>{props?.children}</DataContext.Provider>
  );
};
