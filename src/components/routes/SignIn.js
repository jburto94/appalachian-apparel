import SignUpForm from "../sign-up/SignUpForm";
import Button from "../button/Button";

import {
  signInWithGooglePopup,
  createUserDocFromAuth
 } from "../../utils/firebase/firebase.utils";

const SignIn = () => {
  const getGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocFromAuth(user);
    console.log(userDocRef);
  };

  return (
    <div>
      <h1>Sign In</h1>
      <Button buttonType='google' type='submit' onClick={getGoogleUser}>Sign in with Google</Button>
      <SignUpForm />
    </div>
  );
};

export default SignIn;