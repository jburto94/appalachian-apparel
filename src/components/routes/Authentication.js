import SignUpForm from "../forms/SignUpForm";
import SignInForm from "../forms/SignInForm";
import './Authentication.scss';

const Authentication = () => {

  return (
    <div className='authentication-container'>
      <SignInForm />
      <SignUpForm />
    </div>
  );
};

export default Authentication;