import React from 'react';
import * as S from './FieldLabel.styles';

export interface FieldLabelProps {
  name: string;
  htmlFor: string;
}

const FieldLabel: React.FunctionComponent<FieldLabelProps> = ({
  name,
  ...props
}) => {
  return <S.FieldLabel {...props}>{name}</S.FieldLabel>;
};

export default FieldLabel;
