import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useState,
} from 'react';

type NavigationContextType = {
  step: number;
  setStep: Dispatch<SetStateAction<number>>;
};

const NavigationContext = createContext<NavigationContextType>({
  step: 1,
  setStep: () => {},
});

export const useNavigationContext = () => useContext(NavigationContext);

export function NavigationProvider({ children }: { children: ReactNode }) {
  const [step, setStep] = useState<number>(1);

  return (
    <NavigationContext.Provider value={{ step, setStep }}>
      {children}
    </NavigationContext.Provider>
  );
}
