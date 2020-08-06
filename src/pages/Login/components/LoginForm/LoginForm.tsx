import React from 'react';
import { Formik, Form, FormikHelpers, FormikProps } from 'formik';

import { InputValidationTypes } from '../../../../types/shared/forms.types';
import FormWrapper from '../../../../components/FormWrapper/FormWrapper';
import FieldInput from '../../../../shared/components/Fields/FieldInput/FieldInput';
import { LoginFormValues } from '../../Login.types';
import Preloader from '../../../../shared/components/Preloader/Preloader';
import FieldSubmit from '../../../../shared/components/Fields/FieldSubmit/FieldSubmit';
import { loginValidationSchema } from '../../../../shared/helpers/validations/login/loginValidation';

export interface LoginFormProps {
  onSubmit: (
    values: LoginFormValues,
    actions: FormikHelpers<LoginFormValues>,
  ) => void;
  isPending: boolean;
}

const LoginForm: React.FunctionComponent<LoginFormProps> = ({
  onSubmit,
  isPending,
}) => {
  const handleSubmit = (
    values: LoginFormValues,
    actions: FormikHelpers<LoginFormValues>,
  ): void => {
    actions.setSubmitting(false);
    onSubmit(values, actions);
  };

  const initialValues: LoginFormValues = {
    email: '',
    password: '',
  };

  return (
    <>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={loginValidationSchema}
      >
        {(props: FormikProps<LoginFormValues>) => (
          <FormWrapper name="Login">
            <Form>
              <FieldInput
                type="text"
                name="email"
                label="Email Address"
                error={props.errors.email}
                touched={props.touched.email}
                validationType={InputValidationTypes.ON_TOUCH}
              />

              <FieldInput
                name="password"
                type="password"
                label="Your password"
                error={props.errors.password}
                touched={props.touched.password}
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

export default LoginForm;
