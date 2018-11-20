import React, { PureComponent } from 'react'
import { Formik, Form } from 'formik'
import {
  AuthContainer,
  Particles,
  FormWrapper,
  FormContainer,
  AuthHeader,
  AuthInput,
  Icon,
  AuthButtonWrapper,
  LoadingButton
} from 'Components/Blocks'
import * as colors from 'Theme/colors'
import validationSchema from './validationSchema'

export default class Login extends PureComponent {
  handleSubmitClick = values => {}

  render() {
    return (
      <AuthContainer>
        <Particles />
        <FormWrapper>
          <Formik
            initialValues={{ email: '', password: '' }}
            validateOnBlur={false}
            validateOnChange={false}
            validationSchema={validationSchema}
            onSubmit={this.handleSubmitClick}
          >
            {({ errors, values, handleSubmit, handleBlur, handleChange }) => (
              <Form>
                <FormContainer>
                  <AuthHeader icon="" title="Sign in" />
                  <div>
                    <AuthInput
                      addonBefore={
                        <Icon
                          color={errors.email ? colors.warning : colors.dark}
                          name="far fa-envelope"
                          size="25px"
                        />
                      }
                      name="email"
                      placeholder="email@my.com"
                      size="large"
                      value={values.email}
                      onBlur={handleBlur}
                      onChange={handleChange}
                    />
                    <AuthInput
                      addonBefore={
                        <Icon
                          color={errors.password ? colors.warning : colors.dark}
                          name="fas fa-key"
                          size="25px"
                        />
                      }
                      name="password"
                      placeholder="*****"
                      size="large"
                      value={values.password}
                      onBlur={handleBlur}
                      onChange={handleChange}
                    />
                  </div>
                  <AuthButtonWrapper>
                    <LoadingButton
                      disabled={true}
                      isLoading={false}
                      title="Go"
                      onClick={handleSubmit}
                    />
                  </AuthButtonWrapper>
                </FormContainer>
              </Form>
            )}
          </Formik>
        </FormWrapper>
      </AuthContainer>
    )
  }
}
