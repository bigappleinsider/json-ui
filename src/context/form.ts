import { createContext, useContext } from 'react';

interface FormContextValue {
  values: any;
  onSetValue: (id: string, value: string) => void;
}

const defaultMethodImplementation = () => {
  throw new Error('Form context has not been implemented.');
};

export const defaultValue: FormContextValue = {
  values: {},
  onSetValue: defaultMethodImplementation,
};

export const isSubmitDisabled = (
  values: any,
  requiredFields: string[] = [],
) => {
  return requiredFields.some((field) => {
    return values[field] == null || values[field].length === 0;
  });
};

export const FormContext = createContext<FormContextValue>(defaultValue);

export const useForm = () => useContext(FormContext);
