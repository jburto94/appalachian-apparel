import './FormInput.scss'

const FormInput = ({ label, ...inputProps }) => {
  return (
    <div className='input-group'>
      <input  {...inputProps} className='form-input' />
      {label && (
        <label className={`${inputProps.value.length ? 'shrink' : ''} input-label`}>{label}</label>
      )}
    </div>
  )
}

export default FormInput;