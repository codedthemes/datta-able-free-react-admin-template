// project-imports
import AuthRegisterForm from 'sections/auth/AuthRegister';

// ===========================|| AUTH - REGISTER V1 ||=========================== //

export default function RegisterPage() {
  return (
    <div className="auth-main">
      <div className="auth-wrapper v1">
        <div className="auth-form">
          <div className="position-relative">
            <div className="auth-bg">
              <span className="r"></span>
              <span className="r s"></span>
              <span className="r s"></span>
              <span className="r"></span>
            </div>
            <AuthRegisterForm link="/login" />
          </div>
        </div>
      </div>
    </div>
  );
}
