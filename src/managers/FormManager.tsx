import React, { ReactNode } from 'react';
import { FormContext } from '../context/form';

interface Props {
  children: ReactNode;
}

export default function FormManager({ children }: Props) {
  const [values, setValues] = React.useState<any>({});

  const handleSetValue = (id: string, value: string) => {
    setValues({
      ...values,
      [id]: value,
    });
  };

  return (
    <FormContext.Provider
      value={{
        values,
        onSetValue: handleSetValue,
      }}
    >
      {children}
    </FormContext.Provider>
  );
}
