import { useState } from "react";
import FormInput from "../form-input/FormInput";
import Button from "../../button/Button";
import { SignInContainer, SignInHeader, ButtonsContainer } from './SignInForm.jsx';

import {
  signInWithGooglePopup,
  signInAuthWithEmailAndPassword,
 } from "../../../utils/firebase/firebase.utils";

const defaultFormFields = {
  email: '',
  password: ''
}

const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await signInAuthWithEmailAndPassword(email, password);
      setFormFields({...defaultFormFields});
    } catch(e) {
      if (e.code === 'auth/wrong-password' || e.code === 'auth/user-not-found') {
        alert('incorrect email/password');
      }
    }
  };

  const handleChange = e => {
    const { name, value } = e.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const signInWithGoogleUser = async () => {
    await signInWithGooglePopup();
  };

  return (
    <SignInContainer>
      <SignInHeader>Already have an account?</SignInHeader>
      <span>Sign in with your email</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label='Email'
          type='email'
          required
          onChange={handleChange}
          name="email"
          value={email}
        />
        <FormInput
          label='Password'
          type='password'
          required
          onChange={handleChange}
          name="password"
          value={password}
        />
        <ButtonsContainer>
          <Button type='submit'>Sign In</Button>
          <Button type='button' buttonType='google' onClick={signInWithGoogleUser}>Google Sign in</Button>
        </ButtonsContainer>
      </form>
    </SignInContainer>
  );
};

export default SignInForm;