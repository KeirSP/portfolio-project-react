import React from "react";
import { render } from "@testing-library/react";
import ReactDOM from "react-dom";
import App from "./App";
import enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";
enzyme.configure({ adapter: new Adapter() });
import { shallow } from "enzyme";

describe("App", () => {
  it("should render a nav bar ", () => {
    const component = shallow(<App />);
    expect(component.exists("Navigation")).toEqual(true);
  });
  it("should render two Routes", () => {
    const component = shallow(<App />);
    expect(component.find("Route").length).toEqual(2);
  });
});
