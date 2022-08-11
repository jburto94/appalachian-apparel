import './Button.scss';

const BUTTON_TYPES_CLASSESS = {
  inverted: 'inverted',
  google: 'google-sign-in'
}

const Button = ({ children, buttonType, ...buttonProps }) => {
  return (
    <button className={`button-container ${BUTTON_TYPES_CLASSESS[buttonType]}`} {...buttonProps}>{children}</button>
  )
};

export default Button;