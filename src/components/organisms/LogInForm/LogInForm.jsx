import FormField from "../../molecules/FormField/FormField";
import Button from "../../atoms/Button/Button";

export default function LogInForm({ email, password, onEmailChange, onPasswordChange, onSubmit }) {
  return (
    <form onSubmit={onSubmit}>
      <FormField
        label="Email"
        type="email"
        placeholder="Enter email"
        value={email}
        onChange={onEmailChange}
        name="email"
      />
      <FormField
        label="Password"
        type="password"
        placeholder="Enter password"
        value={password}
        onChange={onPasswordChange}
        name="password"
      />
      <Button type="submit" text="Log In" />
    </form>
  );
}
