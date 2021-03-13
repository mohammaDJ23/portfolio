import { useCallback, useEffect, useState } from "react";

import { UseCircleHookTypes } from "../../types/types";
import { useShapeUtiles } from "../shapes-utiles/shapes-utiles";

const trngArr = [
  { scale: 0.8, rotate: -80 },
  { scale: 1, rotate: 120 },
  { scale: 1.2, rotate: 60 }
];

let timer: ReturnType<typeof setInterval>;

export const useCricle = (isAllowToRender: boolean): UseCircleHookTypes => {
  const [triangle, setTriangle] = useState<UseCircleHookTypes>({
    scale: 1,
    rotate: 30
  });

  const { getRandomArrEl, checkForRepeatEl } = useShapeUtiles();

  const circleAnimation = useCallback(
    ({ arrEl, index }) => {
      const newTrng = checkForRepeatEl({ arrEl, index, state: triangle, arr: trngArr });

      if (typeof newTrng !== "string") {
        setTriangle(newTrng);
      }
    },
    [checkForRepeatEl, triangle]
  );

  useEffect(() => {
    if (isAllowToRender) {
      timer = setInterval(() => circleAnimation(getRandomArrEl(trngArr)), 3000);

      return () => {
        clearInterval(timer);
      };
    }
  }, [circleAnimation, getRandomArrEl, isAllowToRender]);

  return { ...triangle };
};
