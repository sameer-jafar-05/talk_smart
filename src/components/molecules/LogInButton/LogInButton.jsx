import Button from "../../atoms/Button/Button";

export default function LogInButton({ onLogIn }) {
  return (
    <Button
      text="Log In"
      type="button"
      onClick={onLogIn}
    />
  );
}
