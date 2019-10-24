import React, { useState } from "react";
import Select from "react-select";

const options = [
  { value: 1, label: "Option 1" },
  { value: 2, label: "Option 2" },
  { value: 3, label: "Option 3" }
];

function App() {
  const [selection, setSelection] = useState(null);

  return (
    <>
      <label htmlFor="select">Selection</label>
      <Select
        inputId="select"
        isClearable
        isSearchable={false}
        options={options}
        value={options.find(option => option.value === option)}
        onChange={option => setSelection(option ? option.value : null)}
      />
      <p>
        {selection ? `You selected option ${selection}.` : "Select an option."}
      </p>
    </>
  );
}

export default App;
