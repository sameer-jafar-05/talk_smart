import { useState } from "react";
import LoginForm from "../components/organisms/LogInForm/LogInForm";

export default function LogInPageContainer() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    console.log("Logging in with:", { email, password });
  }

  return (
    <LoginForm
      email={email}
      password={password}
      onEmailChange={(e) => setEmail(e.target.value)}
      onPasswordChange={(e) => setPassword(e.target.value)}
      onSubmit={handleSubmit}
    />
  );
}
