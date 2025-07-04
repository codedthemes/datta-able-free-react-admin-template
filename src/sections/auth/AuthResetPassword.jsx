import PropTypes from 'prop-types';
// react-bootstrap
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Image from 'react-bootstrap/Image';

// third-party
import { useForm } from 'react-hook-form';

// project-imports
import MainCard from 'components/MainCard';
import { emailSchema } from 'utils/validationSchema';

// assets
import DarkLogo from 'assets/images/logo-dark.svg';

// ==============================|| AUTH RESET PASSWORD FORM ||============================== //

export default function AuthResetPasswordForm({ className }) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm();

  const onSubmit = () => {
    reset();
  };

  return (
    <MainCard className="mb-0">
      <div className="text-center">
        <a>
          <Image src={DarkLogo} alt="img" />
        </a>
      </div>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <h4 className={`text-center f-w-500 mt-4 mb-3 ${className}`}>Reset Password</h4>
        <Form.Group className="mb-3" controlId="formEmail">
          <Form.Label className={className}>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Email Address"
            {...register('email', emailSchema)}
            isInvalid={!!errors.email}
            className={className && 'bg-transparent border-white text-white border-opacity-25 '}
          />
          <Form.Control.Feedback type="invalid">{errors.email?.message}</Form.Control.Feedback>
        </Form.Group>
        <div className="text-center mt-4">
          <Button type="submit" className="shadow px-sm-4">
            Reset Password
          </Button>
        </div>
      </Form>
    </MainCard>
  );
}

AuthResetPasswordForm.propTypes = { className: PropTypes.string };
