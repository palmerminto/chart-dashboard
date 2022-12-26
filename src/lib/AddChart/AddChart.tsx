import { FunctionComponent, useState } from "react";
import { useData } from "../DataProvider/useData";
import { getStoredValue, useLocalStorage } from "../hooks/useLocalStorage";
import { Input } from "../Input/Input";
import { Picker } from "../Picker/Picker";
import uuidv4 from "uuid/v4";
import { Config } from "../Dashboard/Dashboard.types";

type Form = {
  id?: string;
  groupedBy?: string;
  keyData?: string;
  groupedByLabel?: string;
  title?: string;
  type?: string;
};

export const AddChart: FunctionComponent<{
  onDelete?: () => void;
}> = (props) => {
  const { getChartOptions } = useData();
  const [form, setForm] = useState<Form>({ id: uuidv4() });

  const [storedValue, setValue] = useLocalStorage<string | null>(
    "clientId:1234",
    null
  );

  const handleOnClick = () => {
    let updatedStoredValue;
    if (storedValue) {
      updatedStoredValue = [...JSON.parse(storedValue), form];
    }

    setValue(JSON.stringify(updatedStoredValue));
  };

  const chartOptions = getChartOptions && getChartOptions();
  return (
    <form>
      <hr />
      <p>Add Chart...</p>
      <Input
        label="Title"
        onChange={(value) => setForm({ ...form, title: value })}
      />

      <Picker
        label="Chart Type"
        options={[
          { label: "Bar", value: "bar" },
          { label: "Line", value: "line" },
          { label: "Pie", value: "pie" },
        ]}
        onChange={(value) => setForm({ ...form, type: value.value })}
      />
      <Picker
        label="Grouped By"
        options={chartOptions ?? []}
        onChange={(value) => setForm({ ...form, groupedBy: value.value })}
      />
      <Input
        label="Grouped By Label"
        onChange={(value) => setForm({ ...form, groupedByLabel: value })}
      />
      <Picker
        label="Key Data"
        options={chartOptions ?? []}
        onChange={(value) => setForm({ ...form, keyData: value.value })}
      />
      <button onClick={() => handleOnClick()} type="submit">
        Add Chart
      </button>
      <button
        onClick={() => props?.onDelete && props?.onDelete()}
        type="button"
      >
        Delete Charts
      </button>
    </form>
  );
};
