import { useState } from "react";
import FormInput from "../form-input/FormInput";
import { SignUpContainer, SignUpHeader } from './SignUpForm.jsx'

import { createAuthUserWithEmailAndPassword, createUserDocFromAuth } from "../../../utils/firebase/firebase.utils";
import Button from "../../button/Button";

const defaultFormFields = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: ''
}

const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;

  const handleChange = e => {
    const { name, value } = e.target;

    setFormFields({ ...formFields, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert('Passwords do not match')
      return
    }

    try {
      const { user } = await createAuthUserWithEmailAndPassword(email, password);
      await createUserDocFromAuth(user, { displayName });

      setFormFields({...defaultFormFields});
    } catch(e) {
      if (e.code === 'auth/email-already-in-use') {
        alert('Cannot create user. Email already in use.')
      }
    }
  };

  return (
    <SignUpContainer>
      <SignUpHeader>No account yet?</SignUpHeader>
      <span>Sign up with your email</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label='Display Name'
          type='text'
          onChange={handleChange}
          name="displayName"
          value={displayName}
        />
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
        <FormInput
          label='Password Confirmation'
          type='password'
          required
          onChange={handleChange}
          name="confirmPassword"
          value={confirmPassword}
        />
        <Button type='submit'>Sign Up</Button>
      </form>
    </SignUpContainer>
  );
};

export default SignUpForm;