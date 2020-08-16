import React, { useEffect } from 'react';
import Select, { Props as SelectProps, OptionTypeBase } from 'react-select';

import FieldWrapper from '../../../../shared/components/Fields/FieldWrapper/FieldWrapper';
import { FieldInputProps } from '../FieldInput/FieldInput';

export interface FieldSelectProps {}

export type FieldSelectPropsType = FieldSelectProps &
  SelectProps<OptionTypeBase> &
  FieldInputProps;

const customStyles = {
  container: provided => ({
    ...provided,
    color: '#5a5f6b',
    boxShadow:
      '0px 1px 1px 0 rgba(255, 255, 255, 0.07), inset 0px 3px 8px 0 rgba(0, 0, 0, 0.25)',
    backgroundColor: '#15181b',
  }),
  menu: provided => ({
    ...provided,
    color: '#5a5f6b',
    backgroundColor: '#15181b',
    boxShadow: '0 11px 24px 0 rgba(0,0,0,0.29)',
    borderRadius: 0,
  }),
  control: (provided, { isDisabled }) => ({
    ...provided,
    backgroundColor: '#15181b',
    boxShadow: 'none',
    padding: '0 10px 0 22px',
    minHeight: 50,
    borderRadius: 0,
    border: 'none',
    ':hover': {
      cursor: 'pointer',
      backgroundColor: '#15181b',
    },
  }),
  option: (provided, state) => ({
    ...provided,
    display: 'flex',
    alignItems: 'center',
    minHeight: 46,
    paddingLeft: 24,
    fontSize: '0.875rem',
    color: 'alto',
    wordBreak: 'break-word',
    backgroundColor: '#15181b',
    'span:first-of-type': {
      maxWidth: '100%',
    },
    ':not(:last-child)': {
      borderBottom: '1px solid rgba(151, 151, 151, 0.2)',
    },
    ':hover, :active': {
      color: 'whiteGRG',
      cursor: 'pointer',
      backgroundColor: '#15181b',
      opacity: '0.8',
    },
  }),
  placeholder: provided => ({
    ...provided,
    color: 'alto',
    fontSize: '0.75rem',
    opacity: 0.56,
  }),
  valueContainer: (provided, state) => ({
    ...provided,
    padding: 0,
    maxWidth: state.selectProps.isMobile ? '50vw' : '75%',
  }),
  singleValue: provided => ({
    ...provided,
    color: '#5a5f6b',
    fontSize: '0.875rem',
  }),
  input: provided => ({
    ...provided,
    color: '#5a5f6b',
    fontSize: '0.875rem',
    maxWidth: '190px',
    'input:not(:focus)': {
      width: 0,
      height: 0,
    },
  }),
  multiValue: provided => ({
    ...provided,
    minHeight: 32,
    display: 'flex',
    alignItems: 'center',
    backgroundColor: 'slateGrayGRG',
    maxWidth: 'calc(100% - 10px)',
    borderRadius: 6,
    '+ div:last-child': {
      lineHeight: 0,
      padding: 0,
      margin: 0,
    },
    '+ div:last-child input:not(:focus)': {
      width: 0,
      height: 0,
    },
  }),
  multiValueLabel: provided => ({
    ...provided,
    padding: '8px 6px',
    paddingLeft: 12,
    color: '#5a5f6b',
    fontSize: '0.875rem',
    fontHeight: 16,
  }),
  multiValueRemove: provided => ({
    ...provided,
    color: '#5a5f6b',
    minHeight: 20,
    minWidth: 20,
    maxHeight: 20,
    maxWidth: 20,
    marginRight: 8,
    padding: 0,
    ':hover': {
      color: '#5a5f6b',
      backgroundColor: '#15181b',
    },
    svg: {
      height: '100%',
      width: '100%',
    },
  }),
  indicatorsContainer: provided => ({
    ...provided,
    svg: {
      color: '#eee',
      opacity: 0.7,
      ':hover': {
        opacity: 1,
      },
    },
  }),
  dropdownIndicator: (provided, { isDisabled }) => ({
    ...provided,
    visibility: isDisabled ? 'hidden' : 'visible',
    height: 'auto',
    width: 'auto',
    svg: {
      height: 30,
      width: 30,
    },
  }),
  indicatorSeparator: provided => ({
    ...provided,
    display: 'none',
  }),
};

const FieldSelect: React.FunctionComponent<FieldSelectPropsType> = ({
  options,
  label,
  padding,
  error,
  name,
  validationType,
  form: { touched, errors, setFieldValue },
  field,
  ...props
}) => {
  return (
    <FieldWrapper
      label={label}
      name={name}
      error={error}
      touched={touched}
      validationType={validationType}
    >
      <Select
        {...field}
        {...props}
        styles={customStyles}
        options={options}
        value={
          options ? options.find(option => option.value === field.value) : ''
        }
        onChange={(option: OptionTypeBase) =>
          setFieldValue(field.name, option.value)
        }
      />
    </FieldWrapper>
  );
};

export default FieldSelect;
