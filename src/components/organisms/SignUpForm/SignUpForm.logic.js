import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { signUpSchema } from "./SignUpForm.schema";

export default function useSignUpForm(onSubmitCallback) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(signUpSchema),
    mode: "onSubmit", // optional: you can also use "onBlur" or "onChange"
  });

  const onSubmit = (data) => {
    if (onSubmitCallback) {
      onSubmitCallback(data);
    }
  };

  return { register, handleSubmit, errors, onSubmit };
}
