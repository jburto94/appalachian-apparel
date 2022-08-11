import SignUpForm from "../sign-up/SignUpForm";

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
      <button onClick={getGoogleUser}>
        Sign in with Google Popup
      </button>
      <SignUpForm />
    </div>
  );
};

export default SignIn;