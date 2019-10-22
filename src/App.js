import React, { useState } from "react";
import Select from "react-select";

const options = [
  { value: 1, label: "Option 1" },
  { value: 2, label: "Option 2" },
  { value: 3, label: "Option 3" }
];

function App() {
  const [option, setOption] = useState(null);

  return (
    <>
      <label htmlFor="select">Selection</label>
      <Select
        inputId="select"
        isClearable
        isSearchable={false}
        options={options}
        value={options.find(option => option.value === option)}
        onChange={option => setOption(option ? option.value : null)}
      />
      <p>{option ? `You selected option ${option}.` : "Select an option."}</p>
    </>
  );
}

export default App;
