import React from 'react';
import * as S from './FormWrapper.styles';

export interface FormWrapperProps {
  name?: string;
  children: JSX.Element[] | JSX.Element;
}

const FormWrapper: React.FunctionComponent<FormWrapperProps> = ({
  name,
  children,
}) => {
  return (
    <S.FormWrapper>
      <S.Top>{name}</S.Top>
      <S.Body>{children}</S.Body>
    </S.FormWrapper>
  );
};

export default FormWrapper;
