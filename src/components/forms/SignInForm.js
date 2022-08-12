import { useState } from "react";
import FormInput from "./FormInput";
import Button from "../button/Button";
import './SignInForm.scss';

import {
  signInWithGooglePopup,
  signInAuthWithEmailAndPassword,
 } from "../../utils/firebase/firebase.utils";

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
      console.log(e);
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
    <div className='sign-in-container'>
      <h2>Already have an account?</h2>
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
        <div className='buttons-container'>
          <Button type='submit'>Sign In</Button>
          <Button type='button' buttonType='google' onClick={signInWithGoogleUser}>Google Sign in</Button>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;