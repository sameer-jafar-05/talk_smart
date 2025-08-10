import LogInButton from "../../../molecules/LogInButton/LogInButton";
import SignUpButton from "../../../molecules/SignUpButton/SignUpButton";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  return (
    <nav>
      <LogInButton onLogIn={() => navigate("/login")} />
      <SignUpButton onSignUp={() => navigate("/signup")} />
    </nav>
  );
}

export default Navbar;
