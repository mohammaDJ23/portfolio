import { createContext, FunctionComponent, useCallback, useState } from "react";

import { NavigationContextTypes } from "../types/types";

export const NavigationContext = createContext<NavigationContextTypes>({
  showNavigation: false,
  showNavigationHandler: () => {}
});

const NavigationContextProvider: FunctionComponent = ({ children }) => {
  const [showNavigation, setShowNavigation] = useState<boolean>(false);

  const showNavigationHandler = useCallback(() => setShowNavigation(prevState => !prevState), []);

  return (
    <NavigationContext.Provider value={{ showNavigation, showNavigationHandler }}>
      {children}
    </NavigationContext.Provider>
  );
};

export default NavigationContextProvider;
