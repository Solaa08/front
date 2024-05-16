import React, { ChangeEvent, ReactElement, InputHTMLAttributes } from 'react';
import Input, { InputProps } from './Input';
import { useField } from '../utils/UseForm';

interface InputFormProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "value"> {
  name: string
}

export default function InputForm({
  name,
  onChange,
  ...props
}: InputFormProps): ReactElement {
  const { value, setField } = useField(name);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value: currentValue } = event.target;
    setField(currentValue);
    if (onChange) onChange(event);
  };

  return (
    <Input name={name} onChange={handleInputChange} {...props} value={value}/>
  );
}