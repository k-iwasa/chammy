import Dashboard from "../Dashboard";
import React from "react";
import userEvent from "@testing-library/user-event";
import { render } from "@testing-library/react";

describe("<Dashboard/>", () => {
  it("react testing librarya", () => {
    const { baseElement } = render(<Dashboard />);

    expect(baseElement).toMatchSnapshot();
  });

  it("react testing library clicka", () => {
    const { baseElement, getByText } = render(<Dashboard />);

    userEvent.click(getByText("clickme"));

    expect(baseElement).toMatchSnapshot();
  });
  it("react testing library 閉じる", () => {
    const { baseElement, getByText } = render(<Dashboard />);

    userEvent.click(getByText("clickme"));

    userEvent.click(getByText("閉じる"));

    expect(baseElement).toMatchSnapshot();
  });
  it("react testing library 閉じるほげ", () => {
    const wrapper = render(<Dashboard />);

    userEvent.click(wrapper.getByText("clickme"));

    userEvent.click(wrapper.getByText("閉じる"));

    expect(wrapper.baseElement).toMatchSnapshot();
  });
});
