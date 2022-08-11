import { signInWithGooglePopup } from "../../utils/firebase/firebase.utils";

const SignIn = () => {
  const getGoogleUser = async () => {
    const response = await signInWithGooglePopup()
    console.log(response.user)
  }
  return (
    <div>
      <h1>Sign In</h1>
      <button onClick={getGoogleUser}>
        Sign in with Google Popup
      </button>
    </div>
  );
};

export default SignIn;