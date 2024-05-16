import clsx from 'clsx';
import React, { InputHTMLAttributes } from 'react';

export interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "value">{
    value:unknown
}

export default function Input({
  className,
  ...props
}: InputProps) {
  return (
    //@ts-ignore
    <input
      className={clsx(className, 'bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5')}
      {...props}
    />
  );
}