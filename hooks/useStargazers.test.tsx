import { renderHook } from "@testing-library/react-hooks";

// screens
import { useStargazers } from "./useStargazers";

// types
import { Info } from "../types";

// defines
import { REPO, USER } from "../defines";

test("useStargazers is invoked without crashing - default information", () => {
  const info: Info = {
    [USER]: "",
    [REPO]: "",
  };
  const {
    result: { current },
  } = renderHook(() => useStargazers(info));

  expect(current).toMatchSnapshot();
});
