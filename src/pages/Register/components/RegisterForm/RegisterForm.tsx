import React from 'react';
import { Formik, Form, FormikHelpers, FormikProps, Field } from 'formik';
import Select, { Props as SelectProps, OptionTypeBase } from 'react-select';

import { RegisterFormValues, UserGender } from '../../Register.types';
import FormWrapper from '../../../../components/FormWrapper/FormWrapper';
import FieldInput from '../../../../shared/components/Fields/FieldInput/FieldInput';
import FieldSelect from '../../../../shared/components/Fields/FieldSelect/FieldSelect';
import { InputValidationTypes } from '../../../../types/shared/forms.types';
import FieldSubmit from '../../../../shared/components/Fields/FieldSubmit/FieldSubmit';
import Preloader from '../../../../shared/components/Preloader/Preloader';
import { registerValidationSchema } from '../../../../shared/helpers/validations/register/registerValidation';

export interface RegisterFormProps {
  onSubmit: (
    values: RegisterFormValues,
    actions: FormikHelpers<RegisterFormValues>,
  ) => void;
  isPending: boolean;
}

const RegisterForm: React.FunctionComponent<RegisterFormProps> = ({
  onSubmit,
  isPending,
}) => {
  const handleSubmit = (
    values: RegisterFormValues,
    actions: FormikHelpers<RegisterFormValues>,
  ): void => {
    actions.setSubmitting(false);
    onSubmit(values, actions);
  };

  const initialValues: RegisterFormValues = {
    userName: null,
    gender: UserGender.MALE,
    age: null,
  };

  const options: OptionTypeBase[] = [
    { value: UserGender.MALE, label: UserGender.MALE },
    { value: UserGender.FEMALE, label: UserGender.FEMALE },
  ];

  return (
    <>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={registerValidationSchema}
      >
        {(props: FormikProps<RegisterFormValues>) => (
          <FormWrapper name="Register">
            <Form>
              <FieldInput
                type="text"
                name="userName"
                label="Your name"
                error={props.errors.userName}
                touched={props.touched.userName}
                validationType={InputValidationTypes.ON_TOUCH}
              />
              <Field
                component={FieldSelect}
                options={options}
                label="Your gender"
                type="select"
                name="gender"
              />

              <FieldInput
                name="age"
                type="number"
                label="Your age"
                error={props.errors.age}
                touched={props.touched.age}
                validationType={InputValidationTypes.ON_TOUCH}
              />
              <FieldSubmit
                disabled={props.isSubmitting || !props.dirty || !props.isValid}
              />
            </Form>
          </FormWrapper>
        )}
      </Formik>
      {isPending && <Preloader />}
    </>
  );
};

export default RegisterForm;
