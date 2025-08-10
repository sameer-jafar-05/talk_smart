import { useState } from "react";
import { registerUser } from "../services/api/authService";

export default function useSignUpForm(onSuccess, onError) {
  const [formData, setFormData] = useState({ name: "", email: "", password: "" });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const validate = () => {
    const errs = {};
    if (!formData.name) errs.name = "Name is required";
    if (!formData.email) errs.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email)) errs.email = "Email is invalid";
    if (!formData.password) errs.password = "Password is required";
    else if (formData.password.length < 6) errs.password = "Password must be 6+ chars";
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const onChange = (field) => (e) => {
    setFormData((prev) => ({ ...prev, [field]: e.target.value }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;
    setLoading(true);
    try {
      const data = await registerUser(formData);
      setLoading(false);
      onSuccess(data);
    } catch (err) {
      setLoading(false);
      onError(err);
    }
  };

  return { formData, onChange, onSubmit, errors, loading };
}
