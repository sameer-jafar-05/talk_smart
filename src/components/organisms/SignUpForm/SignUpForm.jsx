import Button from "../../atoms/Button/Button";
import FormField from "../../molecules/FormField/FormField";
import Button from "../../atoms/Button/Button";
import {useSignUpForm} from "./SignUpFormLogic";

export default function SignUpForm(){
    const { register , handleSubmit , errors , onSubmit} = useSignUpForm((data) => {
        console.log("Form Submitted: " , data);
    });

    return(
        <>
        <form className="signup-form" onSubmit={handleSubmit(onSubmit)}>
            <FormField
            label = "Name"
            type = "text"
            placeholder = "Enter your name"
            name = "name"
            register = {register("name")}
            errors= {errors}
            />
            <FormField
            label = "Email"
            type = "email"
            placeholder = "Enter your email"
            name = "email"
            register = {register("email")}
            errors= {errors}
            />
            <FormField
            label = "Password"
            type = "password"
            placeholder = "Enter your password"
            name = "password"
            register = {register("password")}
            errors= {errors}
            />
            <Button text="Sign Up" type="submit"/>
        </form>
        </>
    )
}
