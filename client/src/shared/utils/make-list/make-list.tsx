import { MyWorksTypes, SkillItemTypes } from "../../types/types";

export function lists<T extends SkillItemTypes | MyWorksTypes, U extends number>(
  arr: T[],
  chunk: U
) {
  return arr.reduce((accumulator, currentValue, index) => {
    const chunkIndex = Math.floor(index / chunk);

    if (!accumulator[chunkIndex]) {
      accumulator[chunkIndex] = [];
    }

    accumulator[chunkIndex].push(currentValue);
    return accumulator;
  }, [] as T[][]);
}
