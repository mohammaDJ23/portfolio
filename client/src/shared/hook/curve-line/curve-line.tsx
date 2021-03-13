import { useCallback, useEffect, useState } from "react";

import { UseCurveLineHookTypes, GetRandomArrElTypes } from "../../types/types";
import { useShapeUtiles } from "../shapes-utiles/shapes-utiles";

let timer: ReturnType<typeof setInterval>;

const path = [
  "M3.282,84.906 C3.654,84.138 10.886,75.296 12.945,72.537 C16.225,68.393 14.333,70.334 24.638,59.158 C33.708,49.543 50.940,33.162 70.467,18.660 C89.071,5.214 109.971,-6.353 105.070,18.025 C100.338,33.788 92.136,53.915 87.053,69.543 C81.659,85.576 79.385,97.110 79.187,105.210 C80.158,119.867 84.589,126.406 89.778,131.066 C98.861,141.012 120.264,133.379 143.039,121.355 C165.933,108.894 189.078,99.869 200.986,103.136 C213.685,105.359 216.907,117.540 215.385,123.691 ",
  "M3.619,18.272 C3.625,17.896 13.945,8.842 20.032,8.220 C27.119,6.420 29.973,13.050 38.127,16.856 C46.320,20.669 59.725,19.379 80.364,12.204 C99.508,6.558 125.887,-4.972 125.498,13.666 C122.626,26.249 115.578,41.610 111.201,52.972 C106.525,64.650 104.519,72.328 104.706,76.969 C106.161,85.087 112.408,85.322 120.083,84.427 C134.456,82.425 161.826,74.054 181.024,73.187 C201.512,70.870 205.500,83.875 201.013,99.968 C196.077,116.457 193.828,126.472 188.090,135.142 "
];

export const useCurveLine = (isAllowToRender: boolean): UseCurveLineHookTypes => {
  const [curve, setCurve] = useState<string>(
    "M3.282,84.906 C3.654,84.138 10.886,75.296 12.945,72.537 C16.225,68.393 14.333,70.334 24.638,59.158 C33.708,49.543 50.940,33.162 70.467,18.660 C89.071,5.214 109.971,-6.353 105.070,18.025 C100.338,33.788 92.136,53.915 87.053,69.543 C81.659,85.576 79.385,97.110 79.187,105.210 C80.158,119.867 84.589,126.406 89.778,131.066 C98.861,141.012 120.264,133.379 143.039,121.355 C165.933,108.894 189.078,99.869 200.986,103.136 C213.685,105.359 216.907,117.540 215.385,123.691 "
  );

  const { getRandomArrEl, checkForRepeatEl } = useShapeUtiles();

  const largeCurveAnimation = useCallback(
    ({ arrEl, index }: GetRandomArrElTypes) => {
      const newPath = checkForRepeatEl({ arrEl, index, state: curve, arr: path });

      if (typeof newPath === "string") {
        setCurve(newPath);
      }
    },
    [checkForRepeatEl, curve]
  );

  useEffect(() => {
    if (isAllowToRender) {
      timer = setInterval(() => largeCurveAnimation(getRandomArrEl(path)), 5000);

      return () => {
        clearInterval(timer);
      };
    }
  }, [isAllowToRender, getRandomArrEl, largeCurveAnimation]);

  return { curve };
};
