import { InputGroup, Input, FormInputLabel } from './FormInput.jsx';


const FormInput = ({ label, ...inputProps }) => {
  return (
    <InputGroup>
      <Input  {...inputProps} />
      {label && (
        <FormInputLabel shrink={inputProps.value.length}>{label}</FormInputLabel>
      )}
    </InputGroup>
  )
}

export default FormInput;