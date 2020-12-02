function FormField({ label, type, name, value, onChange }) {
  return (
    <div>
      <label>
        {label}
        {type === 'textarea'
          ? <textarea
            type={type}
            name={name}
            value={value}
            onChange={onChange}
          />
          : <input
            type={type}
            name={name}
            value={value}
            onChange={onChange}
          />
        }
      </label>
    </div>
  )
}

export default FormField;