import { useCallback } from "react";
import { useHistory, useLocation } from "react-router-dom";

import { UseRedirectHookTypes } from "../../types/types";

export const useRendringPage = (): UseRedirectHookTypes => {
  const { pathname } = useLocation();
  const { push } = useHistory();

  // redirect to the pages

  const navigateToPage = useCallback(
    (page: string) => {
      if (pathname === page) {
        return;
      }

      push(page);
    },
    [pathname, push]
  );

  return { navigateToPage };
};
