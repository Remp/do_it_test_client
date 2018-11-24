import React, { PureComponent } from 'react'
import { Formik, Form } from 'formik'
import { Particles, AuthInput, AuthHeader, Icon, LoadingButton } from './Blocks'
import * as colors from 'Theme/colors'
import * as routes from 'Constants/routes'
import validationSchema from './validationSchema'
import './styles.less'

export default class Login extends PureComponent {
  static getDerivedStateFromProps = (nextProps, prevState) => {
    const { history, token } = nextProps

    if (token) history.push(routes.main)

    return prevState
  }

  handleSubmitClick = ({ email, password }) => {
    const { onLogIn } = this.props

    onLogIn({ email, password })
  }

  render() {
    const { isLoading } = this.props

    return (
      <div className="auth-container">
        <Particles />
        <div className="form-wrapper">
          <Formik
            initialValues={{ email: '', password: '' }}
            validateOnBlur={false}
            validateOnChange={false}
            validationSchema={validationSchema}
            onSubmit={this.handleSubmitClick}
          >
            {({ errors, values, handleSubmit, handleBlur, handleChange }) => (
              <Form>
                <div className="form-container">
                  <AuthHeader icon="" title="Sign in / up" />
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
                      type="password"
                      value={values.password}
                      onBlur={handleBlur}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="auth-button-wrapper">
                    <LoadingButton
                      disabled={true}
                      isLoading={isLoading}
                      title="Go"
                      onClick={handleSubmit}
                    />
                  </div>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    )
  }
}
