import React from "react";
import renderer from "react-test-renderer";

// screens
import SkeletonList from ".";

test("SkeletonList should render without crashing", () => {
  const SkeletonListComponent = renderer.create(<SkeletonList />).toJSON();
  expect(SkeletonListComponent).toMatchSnapshot();
});
