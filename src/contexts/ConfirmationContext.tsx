import { createContext, ReactNode, useState } from "react";

type ConfirmFunc = (() => Promise<any>) | null;

type ConfirmationType = {
  confirm: ConfirmFunc;
  setConfirm: (func: ConfirmFunc) => void;
};

const ConfirmationContext = createContext<ConfirmationType>({
  confirm: async () => {
    /** empty function */
  },
  setConfirm: (func: ConfirmFunc) => {
    /** */
  },
});

export const ConfirmationProvider = ({ children }: { children: ReactNode }) => {
  const [confirm, setConfirm] = useState<ConfirmFunc>(null);
  return (
    <ConfirmationContext.Provider
      value={{
        confirm,
        setConfirm: (val: ConfirmFunc) => setConfirm((old) => val),
      }}
    >
      {children}
    </ConfirmationContext.Provider>
  );
};

export default ConfirmationContext;
