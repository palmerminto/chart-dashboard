import { Fragment, FunctionComponent } from "react";
import { useData } from "../DataProvider/useData";
import { Picker } from "../Picker/Picker";
import { PickerOptions } from "../Picker/Picker.types";
import { FilterProps } from "./Filter.types";

export const Filter: FunctionComponent<FilterProps> = (props) => {
  const { filterBy, getFilterData } = useData();

  const filterData = getFilterData && getFilterData(props);

  const handleOnChange = (option: PickerOptions) => {
    filterBy && filterBy({ key: props?.filterKey, value: option.value });
  };
  return (
    <Fragment>
      {props?.type === "select" && (
        <Picker
          label={props?.label}
          options={filterData}
          onChange={handleOnChange}
        />
      )}
    </Fragment>
  );
};
