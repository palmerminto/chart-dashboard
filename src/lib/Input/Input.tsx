import { FunctionComponent, useState } from "react";

export const Input: FunctionComponent<{
  label: string;
  onChange?: (newValue: string) => void;
}> = (props) => {
  const [value, setValue] = useState<string | undefined>();

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
    props?.onChange && props?.onChange(event.target.value);
  };

  return (
    <div>
      <label>{props?.label}</label>
      <input value={value} type="text" onChange={handleOnChange} />
    </div>
  );
};
