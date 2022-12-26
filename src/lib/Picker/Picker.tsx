import { FunctionComponent } from "react";
import Select, { SingleValue } from "react-select";
import { PickerOptions } from "./Picker.types";

export const Picker: FunctionComponent<{
  label: string;
  options?: PickerOptions[];
  onChange?: (newValue: PickerOptions) => void;
}> = (props) => {
  return (
    <div>
      <label>{props?.label}</label>
      <Select
        options={props?.options}
        onChange={(value) =>
          props?.onChange && props?.onChange(value as PickerOptions)
        }
      />
    </div>
  );
};
