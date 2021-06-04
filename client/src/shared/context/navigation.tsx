import { createContext, FunctionComponent, useCallback, useState } from "react";

import { NavigationContextTypes } from "../types/types";

export const NavigationContext = createContext<NavigationContextTypes>({
  showNavigation: false,
  showNavigationHandler: (arg: boolean) => {}
});

const NavigationContextProvider: FunctionComponent = ({ children }) => {
  const [showNavigation, setShowNavigation] = useState<boolean>(false);

  const showNavigationHandler = useCallback(
    (arg: boolean) => setShowNavigation(arg),
    []
  );

  return (
    <NavigationContext.Provider
      value={{ showNavigation, showNavigationHandler }}
    >
      {children}
    </NavigationContext.Provider>
  );
};

export default NavigationContextProvider;
