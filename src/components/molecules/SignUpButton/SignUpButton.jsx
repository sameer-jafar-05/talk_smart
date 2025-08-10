import { useNavigate } from "react-router-dom";
import Button from "../../atoms/Button/Button";

export default function SignUpButton() {
  const navigate = useNavigate();

  return (
    <Button 
      text="Sign Up" 
      type="button" 
      onClick={() => navigate("/signup")} 
    />
  );
}
