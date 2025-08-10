import { useState } from "react";
import SignUpForm from "../components/organisms/SignUpForm/SignUpForm";
import { registerUser } from "../services/api/authService";

export default function SignUpPageContainer() {
  const [formData, setFormData] = useState({ name: "", email: "", password: "" });
  const [errors, setErrors] = useState({});
  const [globalError, setGlobalError] = useState("");
  const [loading, setLoading] = useState(false);

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) errs.name = "Name is required";
    if (!formData.email.trim()) errs.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email)) errs.email = "Email is invalid";
    if (!formData.password) errs.password = "Password is required";
    else if (formData.password.length < 6) errs.password = "Password must be at least 6 characters";
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleChange = (field) => (e) => {
    setFormData((prev) => ({ ...prev, [field]: e.target.value }));
    setErrors((prev) => ({ ...prev, [field]: "" })); // clear field error on change
    setGlobalError(""); // clear global error on any change
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setGlobalError(""); // reset global error on submit

    if (!validate()) return;

    setLoading(true);
    try {
      const response = await registerUser(formData);
      console.log("Sign up successful:", response);
      alert("Sign up successful!");
      setFormData({ name: "", email: "", password: "" }); // reset form
    } catch (error) {
      console.error("Sign up failed:", error);
      setGlobalError(error.message || "Sign up failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <SignUpForm
      formData={formData}
      onChange={handleChange}
      onSubmit={handleSubmit}
      errors={errors}
      loading={loading}
      globalError={globalError}
    />
  );
}
