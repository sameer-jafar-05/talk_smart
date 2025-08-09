import {useForm } from "react-hook -form";
import {yupResolver} from "@hookform/resolvers/yup";
import { signUpSchema } from "./SignUpForm.schema";

export default function useSignUpForm(onSubmitCallback){
    const { 
        register , 
        handleSubmit , 
        formState : {errors}
    } = useForm ( {
        resolver: yupResolver(signUpSchema)
    });

    const onSubmit = (data) => {
        onSubmitCallback(data);
    };
    return {register , handleSubmit , errors , onSubmit};
}