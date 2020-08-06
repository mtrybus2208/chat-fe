import React from "react";

import FieldLabel from "../FieldLabel/FieldLabel";
import ErrorMsg from "./components/ErrorMsg/ErrorMsg";
import * as S from "./FieldWrapper.styles";
import { selectValidationType } from "../../../helpers/forms/selectValidationType";
import { InputValidationTypes } from "../../../../types/shared/forms.types";

export interface FieldWrapperProps {
  children: JSX.Element[] | JSX.Element;
  label: string;
  name: string;
  error?: string;
  touched?: boolean;
  validationType?: InputValidationTypes;
}

const FieldWrapper: React.FunctionComponent<FieldWrapperProps> = ({
  children,
  name,
  label,
  error,
  touched,
  validationType,
}) => {
  return (
    <S.Container>
      <FieldLabel htmlFor={name} name={label} />
      <S.Content>{children}</S.Content>
      <ErrorMsg
        msg={error}
        show={!!selectValidationType({ validationType, touched, error })}
      />
    </S.Container>
  );
};

export default FieldWrapper;
