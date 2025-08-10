import Label from "../../atoms/Label/Label";
import Input from "../../atoms/Input/Input";
import ErrorMessage from "../../atoms/ErrorMessage/ErrorMessage";

export default function FormField({ label, type = "text", placeholder, value, onChange, name, error }) {
  return (
    <div className="form-field">
      <Label text={label} htmlFor={name} />
      <Input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        name={name}
        aria-describedby={error ? `${name}-error` : undefined}
        aria-invalid={!!error}
      />
      <ErrorMessage message={error} id={`${name}-error`} />
    </div>
  );
}
