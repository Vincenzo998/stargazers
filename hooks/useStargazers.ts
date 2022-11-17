import { useCallback, useEffect, useState } from "react";
import axios from "axios";

// hooks
import { useDebounce } from "./useDebounce";

// types
import { Info } from "../types";

// defines
import { REPO, USER } from "../defines";

export const useStargazers = (info: Info) => {
  const [stargazers, setStargazers] = useState([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  const debouncedInfo = useDebounce<Info>(info, 500);

  const getStargazers = useCallback(async () => {
    if (debouncedInfo[USER] && debouncedInfo[REPO]) {
      setLoading(true);
      try {
        const res = await axios.get("https://api.github.com/repos/" + debouncedInfo[USER] + "/" + debouncedInfo[REPO] + "/stargazers");
        const { data, status } = res || {};
        if (status === 200) {
          setStargazers(data);
          setError("");
        }
      } catch (err) {
        setError("Data not available");
      } finally {
        setLoading(false);
      }
    } else {
      setStargazers([]);
      setError("");
    }
  }, [debouncedInfo]);

  useEffect(() => {
    getStargazers();
  }, [getStargazers]);

  return {
    stargazers,
    loading,
    error,
  };
};
