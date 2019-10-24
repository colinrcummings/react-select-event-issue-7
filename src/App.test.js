import { render, wait } from "@testing-library/react";
import React from "react";
import selectEvent from "react-select-event";
import App from "./App";

it("clears single selection", async () => {
  const { getByLabelText, getByText } = render(<App />);
  const select = getByLabelText("Selection");
  // no selection
  getByText("Select an option.");
  // select option 1
  await selectEvent.select(select, "Option 1");
  getByText("You selected option 1.");
  // clear selection
  selectEvent.clearFirst(select);
  await wait(() => expect(getByText("Select an option.")).toBeInTheDocument());
  // select option 2
  await selectEvent.select(select, "Option 2"); // fails
  getByText("You selected option 2.");
});
