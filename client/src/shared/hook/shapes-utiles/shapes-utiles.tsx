import { useCallback } from "react";

import { GetRandomArrElTypes, UseCircleHookTypes } from "../../types/types";

export const useShapeUtiles = () => {
  const getRandomArrEl = useCallback(
    (arr: UseCircleHookTypes[] | string[]): GetRandomArrElTypes => {
      const randomIndex = Math.abs(Math.floor(Math.random() * arr.length - 1));
      return { arrEl: arr[randomIndex], index: randomIndex };
    },
    []
  );

  const checkForRepeatEl = useCallback(
    ({ arrEl: randomPath, index, state, arr }: GetRandomArrElTypes) => {
      if (randomPath === state) {
        return arr![index + 1] || arr![index - 1];
      }

      return randomPath;
    },
    []
  );

  return { getRandomArrEl, checkForRepeatEl };
};
