import * as Yup from "yup";

export const signUpSchema = Yup.object().shape({
  name: Yup.string()
    .required("Name is required")
    .min(2, "Name must be at least 2 characters"),
    
  email: Yup.string()
    .required("Email is required")
    .email("Invalid email format"),
    
  password: Yup.string()
    .required("Password is required")
    .min(6, "Password must be at least 6 characters"),
});
