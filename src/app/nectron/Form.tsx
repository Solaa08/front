import React, {
    DetailedHTMLProps, FormEvent, FormHTMLAttributes, PropsWithChildren, ReactElement,
  } from 'react';
  import { useForm } from '../utils/UseForm';
  import FormProvider from '../utils/FromProvider';
  
  type FormPropsWithChildren =
      PropsWithChildren<DetailedHTMLProps<FormHTMLAttributes<HTMLFormElement>, HTMLFormElement>>;
  
  export interface FormProps extends Omit<FormPropsWithChildren, 'defaultValue'> {
    handleSubmit : (data: Record<string, unknown>) => void;
    defaultValue ?: Record<string, unknown>;
  }
  
  function InnerForm({
    handleSubmit, defaultValue, children, ...props
  }: FormProps) {
    const { formState } = useForm();
  
    const handleSubmitForm = (
      event: FormEvent<HTMLFormElement>,
      onSubmit: (data: Record<string, unknown>) => void,
    ) => {
      event.preventDefault();
      onSubmit(formState);
    };
  
    return (
      <form onSubmit={(event) => { handleSubmitForm(event, handleSubmit); }} {...props}>
        {children}
      </form>
    );
  }
  
  export default function Form({
    defaultValue, handleSubmit, children, ...props
  }: FormProps): ReactElement {
    return (
      <FormProvider>
        <InnerForm handleSubmit={handleSubmit} defaultValue={defaultValue} {...props}>
          {children}
        </InnerForm>
      </FormProvider>
    );
  }