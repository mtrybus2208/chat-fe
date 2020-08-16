import React from 'react';
import styled from 'styled-components';
import { rgba } from 'polished';

import { pixelify } from '../../../../shared/helpers/styling/styling';

interface StyledFieldInputProps {
  padding?: number | string;
  error?: boolean | string | undefined;
}

type FieldInputElementProps = StyledFieldInputProps &
  React.HTMLProps<HTMLInputElement>;

export const FieldInput = styled.input<FieldInputElementProps>`
  display: block;
  flex: 1;
  height: 50px;
  box-shadow: 0px 1px 1px 0 rgba(255, 255, 255, 0.07),
    inset 0px 3px 8px 0 rgba(0, 0, 0, 0.25);
  background-color: #15181b !important;
  border: 1px solid
    ${({ error }) => {
      return error ? rgba('#7f1515', 0.5) : 'transparent';
    }};
  outline: none;
  font-size: 14px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: 2.25;
  letter-spacing: 0.1px;
  text-align: left;
  color: #5a5f6b;
  padding: ${({ padding }) => pixelify(padding) || '15px'};
  padding-left: 15px;
  width: 100%;

  /* -webkit-box-shadow: 0 0 0px 1000px #15181b inset; */

  &::placeholder {
    font-size: 14px;
    font-weight: normal;
    font-style: normal;
    font-stretch: normal;
    line-height: 2.25;
    color: #5a5f6b;
    text-transform: capitalize;
  }

  &:-webkit-autofill,
  :-webkit-autofill:focus {
    -webkit-text-fill-color: #5a5f6b;
  }
`;
