import { DefaultButton, GoogleSignInButton, InvertedButton } from './Button.jsx';

const BUTTON_TYPES_CLASSESS = {
  'base': DefaultButton,
  'inverted': InvertedButton,
  'google': GoogleSignInButton
}

const Button = ({ children, buttonType, ...buttonProps }) => {
  if (!buttonType) {
    buttonType = 'base'
  };
  
  const CustomButton = BUTTON_TYPES_CLASSESS[buttonType]

  return (
    <CustomButton {...buttonProps}>{children}</CustomButton>
  )
};

export default Button;