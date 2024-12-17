import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import { NavigationProvider } from './context/NavigationContext.tsx';
import { FormProvider } from './context/FormContext.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <NavigationProvider>
      <FormProvider>
        <App />
      </FormProvider>
    </NavigationProvider>
  </StrictMode>
);
