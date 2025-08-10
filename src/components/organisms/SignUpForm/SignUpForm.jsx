import FormField from "../../molecules/FormField/FormField";
import Button from "../../atoms/Button/Button";
import GlobalError from "../../atoms/GlobalError/GlobalError";

export default function SignUpForm({ formData, onChange, onSubmit, errors, loading, globalError }) {
  return (
    <form onSubmit={onSubmit} noValidate>
      <GlobalError message={globalError} />
      <FormField
        label="Name"
        value={formData.name}
        onChange={onChange("name")}
        error={errors.name}
        name="name"
      />
      <FormField
        label="Email"
        type="email"
        value={formData.email}
        onChange={onChange("email")}
        error={errors.email}
        name="email"
      />
      <FormField
        label="Password"
        type="password"
        value={formData.password}
        onChange={onChange("password")}
        error={errors.password}
        name="password"
      />
      <Button text={loading ? "Signing Up..." : "Sign Up"} type="submit" disabled={loading} />
    </form>
  );
}
