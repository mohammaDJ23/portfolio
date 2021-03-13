import { useEffect, useState } from "react";
import { TweenMax } from "gsap";

import { UseRendringPageHookTypes, DurationTimesEnum, HtmlRefTypes } from "../../types/types";

export const useRendringPage = (parentElementRef: HtmlRefTypes): UseRendringPageHookTypes => {
  const [isAllowToRender, setIsAllowToRender] = useState<boolean>(false);

  useEffect(() => {
    setTimeout(() => setIsAllowToRender(true), 1000);
  }, []);

  useEffect(() => {
    (async () => {
      const { current: parrent } = parentElementRef;

      if (parrent) {
        await TweenMax.fromTo(
          parrent,
          DurationTimesEnum.FAST_DURATION,
          { opacity: 0, y: -200 },
          { opacity: 1, y: 0 }
        );

        parrent.style.transform = "unset";
      }
    })();
  }, [parentElementRef]);

  return { isAllowToRender };
};
