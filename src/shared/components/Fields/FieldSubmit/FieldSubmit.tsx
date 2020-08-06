import React from 'react';

import Button from '../../../../shared/components/Buttons/Button/Button';
import * as S from './FieldSubmit.styles';

export interface FieldSubmitProps {
  copy?: string;
  disabled?: boolean;
}

const FieldSubmit: React.FunctionComponent<FieldSubmitProps> = ({
  copy = 'submit',
  disabled = true,
}) => (
  <S.FieldSubmit>
    <Button disabled={disabled}>
      <S.Copy>{copy}</S.Copy>
    </Button>
  </S.FieldSubmit>
);

export default FieldSubmit;
