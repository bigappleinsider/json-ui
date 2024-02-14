import React, { ReactNode } from 'react';
import { FormContext } from '../context/form';

interface Props {
  children: ReactNode;
}

/** Provide form state for JSON schema
 */

export default function FormManager({ children }: Props) {
  const [values, setValues] = React.useState<Record<string, string>>({});

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
