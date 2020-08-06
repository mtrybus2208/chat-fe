import React from "react";

import * as S from "./ErrorMsg.styles";

export interface ErrorMsgProps {
  show?: boolean;
  msg?: string;
}

const ErrorMsg: React.FunctionComponent<ErrorMsgProps> = ({ show, msg }) => (
  <S.ErrorMsg show={show}>
    <S.Content>
      <S.Msg>{msg}</S.Msg>
    </S.Content>
  </S.ErrorMsg>
);

export default ErrorMsg;
