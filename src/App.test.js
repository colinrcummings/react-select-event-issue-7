import { render, wait } from "@testing-library/react";
import React from "react";
import selectEvent from "react-select-event";
import App from "./App";

it("clears single selection", async () => {
  const { getByLabelText, getByText } = render(<App />);
  const select = getByLabelText("Selection");
  await selectEvent.select(select, "Option 1");
  getByText("You selected option 1.");
  selectEvent.clearFirst(select);
  await wait(() => expect(getByText("Select an option.")).toBeInTheDocument()); // fails
});
