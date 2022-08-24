import { InputGroup, Input, FormInputLabel } from './FormInput.jsx';


const FormInput = ({ label, ...inputProps }) => {
  return (
    <InputGroup>
      <Input  {...inputProps} />
      {label && (
        <FormInputLabel>{label}</FormInputLabel>
      )}
    </InputGroup>
  )
}

export default FormInput;