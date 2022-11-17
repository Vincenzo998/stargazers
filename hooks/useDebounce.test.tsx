import { renderHook } from "@testing-library/react-hooks";

// screens
import { useDebounce } from "./useDebounce";

// types
import { Info } from "../types";

// defines
import { REPO, USER } from "../defines";

test("useDebounce is invoked without crashing", () => {
  const info: Info = {
    [USER]: "user",
    [REPO]: "user-repo",
  };

  const {
    result: { current },
  } = renderHook(() => useDebounce<Info>(info, 500));

  expect(current).toMatchSnapshot();
});
