
'use client';

import React, {
    PropsWithChildren, ReactElement, createContext, useMemo, useState,
  } from 'react';
  
  interface FormContextType {
    formState : Record<string, unknown>;
    setFormState : (newValue: Record<string, unknown>) => void
  }
  
  export const FormContext = createContext<FormContextType>({
    formState: {},
    // eslint-disable-next-line no-empty-pattern
    setFormState: ({}) => {},
  });
  
  export default function FormProvider({ children }: PropsWithChildren): ReactElement {
    const [formState, setFormState] = useState<Record<string, unknown>>({});
  
    const providedValues = useMemo(() => ({ formState, setFormState }), [formState, setFormState]);
  
    return (
      <FormContext.Provider value={providedValues}>
        {children}
      </FormContext.Provider>
    );
  }