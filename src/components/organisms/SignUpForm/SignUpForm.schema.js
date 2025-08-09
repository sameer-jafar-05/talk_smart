import * as Yup from "Yup";

export const signUpSchema = Yup.object().shape({
    name:Yup.string()
    .required("Name is required ")
    .min(2 , "Name must be at least 2 characters") , 
    email:Yup.string()
    .required("email is required")
    .email("invalid email format"),
    password:Yup.string()
    .required("password is required")
    .min(6 , "password must be atleast 6 characters")
});