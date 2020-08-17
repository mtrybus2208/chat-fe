import React, { useEffect } from 'react';
import { useField } from 'formik';

import FieldWrapper from '../FieldWrapper/FieldWrapper';
import * as S from './FieldInput.styles';
import { InputValidationTypes } from '../../../../types/shared/forms.types';
export interface FieldInputProps {
  type: string;
  name: string;
  label: string;
  padding?: number | string;
  error?: string;
  touched?: boolean;
  validationType?: InputValidationTypes;
}

const FieldInput: React.FunctionComponent<FieldInputProps> = ({
  label,
  padding,
  touched,
  error,
  validationType,
  name,
  type,
  ...props
}) => {
  const [field] = useField({ name, type });

  return (
    <FieldWrapper
      label={label}
      name={field.name}
      error={error}
      touched={touched}
      validationType={validationType}
    >
      <S.FieldInput {...field} padding={padding} error={error && touched} />
    </FieldWrapper>
  );
};

export default FieldInput;
