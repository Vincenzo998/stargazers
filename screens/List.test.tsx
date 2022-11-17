import React from "react";
import renderer from "react-test-renderer";

// screens
import List from ".";

test("List should render without crashing", () => {
  const ListComponent = renderer.create(<List />).toJSON();
  expect(ListComponent).toMatchSnapshot();
});
