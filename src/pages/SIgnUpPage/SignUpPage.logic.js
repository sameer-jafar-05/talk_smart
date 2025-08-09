// src/pages/SignUpPage/SignUpPage.logic.js
import { useState } from "react";

export function useSignUpPage() {
  const [loading, setLoading] = useState(false);
  const [serverError, setServerError] = useState("");

  // This will be passed into SignUpForm as the onSubmit handler
  const handleSignUp = async (formData) => {
    try {
      setLoading(true);
      setServerError("");

      // Example: API request to sign up the user
      const response = await fetch("https://api.example.com/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });

      if (!response.ok) {
        throw new Error("Signup failed. Please try again.");
      }

      const data = await response.json();
      console.log("Signup success:", data);

      // Redirect to login page or dashboard
      window.location.href = "/login";

    } catch (error) {
      setServerError(error.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return { loading, serverError, handleSignUp };
}