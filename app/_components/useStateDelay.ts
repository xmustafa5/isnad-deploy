import { useEffect, useState } from "react";

export const useStateDelay = (initialState: any, delay: number = 1000) => {
  const [state, setState] = useState(initialState);
  const [stateDelayed, setStateDelayed] = useState(initialState);

  useEffect(() => {
    setTimeout(() => {
      setStateDelayed(state);
    }, delay);
  }, [state]);

  return [stateDelayed, state, setState];
};
