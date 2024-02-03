import React from 'react';
import { Row, Col, Card, Button, Alert } from 'react-bootstrap';
import { NavLink, Link } from 'react-router-dom';

import Breadcrumb from '../../../layouts/AdminLayout/Breadcrumb';

import { CopyToClipboard } from 'react-copy-to-clipboard';

import * as Yup from 'yup';
import { Formik } from 'formik';

const Signin1 = ({ className, ...rest }) => {
  return (
    <React.Fragment>
      <Breadcrumb />
      <div className="auth-wrapper">
        <div className="auth-content">
          <div className="auth-bg">
            <span className="r" />
            <span className="r s" />
            <span className="r s" />
            <span className="r" />
          </div>
          <Card className="borderless text-center">
            <Card.Body>
              <div className="mb-4">
                <i className="feather icon-unlock auth-icon" />
              </div>
              <React.Fragment>
                <Formik
                  initialValues={{
                    email: 'info@codedthemes.com',
                    password: '123456',
                    submit: null
                  }}
                  validationSchema={Yup.object().shape({
                    email: Yup.string().email('Must be a valid email').max(255).required('Email is required'),
                    password: Yup.string().max(255).required('Password is required')
                  })}
                >
                  {({ errors, handleBlur, handleChange, handleSubmit, isSubmitting, touched, values }) => (
                    <form noValidate onSubmit={handleSubmit} className={className} {...rest}>
                      <div className="form-group mb-3">
                        <input
                          className="form-control"
                          label="Email Address / Username"
                          name="email"
                          onBlur={handleBlur}
                          onChange={handleChange}
                          type="email"
                          value={values.email}
                        />
                        {touched.email && errors.email && <small className="text-danger form-text">{errors.email}</small>}
                      </div>
                      <div className="form-group mb-4">
                        <input
                          className="form-control"
                          label="Password"
                          name="password"
                          onBlur={handleBlur}
                          onChange={handleChange}
                          type="password"
                          value={values.password}
                        />
                        {touched.password && errors.password && <small className="text-danger form-text">{errors.password}</small>}
                      </div>

                      {errors.submit && (
                        <Col sm={12}>
                          <Alert variant="danger">{errors.submit}</Alert>
                        </Col>
                      )}

                      <div className="custom-control custom-checkbox text-start mb-4 mt-2">
                        <input type="checkbox" className="custom-control-input me-2" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">
                          Save credentials.
                        </label>
                      </div>

                      <Row>
                        <Col mt={2}>
                          <Button
                            className="btn-block"
                            color="primary"
                            disabled={isSubmitting}
                            size="large"
                            type="submit"
                            variant="primary"
                          >
                            Signin
                          </Button>
                        </Col>
                      </Row>
                    </form>
                  )}
                </Formik>

                <Row>
                  <Col sm={12}>
                    <h5 className="my-3"> OR </h5>
                  </Col>
                </Row>

                <Row>
                  <Col sm={12}>
                    <Button variant="danger">
                      <i className="fa fa-lock" /> Sign in with Google
                    </Button>
                  </Col>
                </Row>

                <hr />
              </React.Fragment>
              <p className="mb-2 text-muted">
                Forgot password?{' '}
                <NavLink to="/auth/reset-password-1" className="f-w-400">
                  Reset
                </NavLink>
              </p>
              <p className="mb-0 text-muted">
                Don’t have an account?{' '}
                <NavLink to="/auth/signup-1" className="f-w-400">
                  Signup
                </NavLink>
              </p>
              <Alert variant="primary" className="text-start mt-3">
                User:
                <CopyToClipboard text="info@codedthemes.com">
                  <Button variant="outline-primary" as={Link} to="#" className="badge mx-2 mb-2" size="sm">
                    <i className="fa fa-user" /> info@codedthemes.com
                  </Button>
                </CopyToClipboard>
                <br />
                Password:
                <CopyToClipboard text="123456">
                  <Button variant="outline-primary" as={Link} to="#" className="badge mx-2" size="sm">
                    <i className="fa fa-lock" /> 123456
                  </Button>
                </CopyToClipboard>
              </Alert>
            </Card.Body>
          </Card>
        </div>
      </div>
    </React.Fragment>
  );
};

Signin1.propTypes = {
  className: PropTypes.string
};

export default Signin1;
