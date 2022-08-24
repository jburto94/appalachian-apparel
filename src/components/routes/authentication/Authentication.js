import SignUpForm from "../../forms/sign-up-form/SignUpForm";
import SignInForm from "../../forms/sign-in-form/SignInForm";
import { AuthenticationContainer } from './Authentication.jsx';

const Authentication = () => {

  return (
    <AuthenticationContainer>
      <SignInForm />
      <SignUpForm />
    </AuthenticationContainer>
  );
};

export default Authentication;