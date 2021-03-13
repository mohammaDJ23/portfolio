import { createContext, FunctionComponent, useCallback, useState } from "react";

import { InputCleanerContextTypes } from "../../types/types";

export const InputCleanerContext = createContext<InputCleanerContextTypes>({
  isClear: false,
  inputCleaner: () => {}
});

const InputCleanerContextProvider: FunctionComponent = ({ children }) => {
  const [isClear, setIsClear] = useState<boolean>(false);

  const inputCleaner = useCallback(() => setIsClear(prevState => !prevState), []);

  return (
    <InputCleanerContext.Provider value={{ isClear, inputCleaner }}>
      {children}
    </InputCleanerContext.Provider>
  );
};

export default InputCleanerContextProvider;
