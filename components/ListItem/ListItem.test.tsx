import React from "react";
import renderer from "react-test-renderer";

// screens
import ListItem from ".";

// types
import { Item } from "../../types";

test("ListItem should render without crashing", () => {
  const item: Item = { login: "user", avatar_url: "url", id: "00000-000000-00000" };
  const ListItemComponent = renderer.create(<ListItem item={item} index={0} />).toJSON();

  expect(ListItemComponent).toMatchSnapshot();
});
