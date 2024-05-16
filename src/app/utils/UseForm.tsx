'use client';

import { useContext } from 'react';
import { FormContext } from './FromProvider';

interface UseFieldReturn {
    value: unknown;
    setField: (newValue: unknown) => void;
  }
  
  export const useForm = () => useContext(FormContext);

  export const useField = (name: string): UseFieldReturn => {
    const { formState, setFormState } = useContext(FormContext);
  
    const setField = (value: unknown) => {
      setFormState({ ...formState, [name]: value });
    };
  
    return {
      value: formState[name] || '',
      setField,
    };
  };
