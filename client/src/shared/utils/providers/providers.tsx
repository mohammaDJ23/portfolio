import { FunctionComponent } from "react";
import InputCleanerContextProvider from "../../context/input-cleaner/input-cleaner";

import NavigationContextProvider from "../../context/navigation";

const Providers: FunctionComponent = ({ children }) => {
  return (
    <NavigationContextProvider>
      <InputCleanerContextProvider>{children}</InputCleanerContextProvider>
    </NavigationContextProvider>
  );
};

export default Providers;
