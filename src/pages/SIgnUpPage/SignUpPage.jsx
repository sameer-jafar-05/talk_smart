// src/pages/SignUpPage/SignUpPage.jsx
import React from "react";
import SignUpForm from "../../components/organisms/SignUpForm/SignUpForm";
import { useSignUpPage } from "./SignUpPage.logic";

export default function SignUpPage() {
  const { loading, serverError, handleSignUp } = useSignUpPage();

  return (
    <div style={{ display: "flex", justifyContent: "center", padding: "50px" }}>
      <div style={{ width: "350px" }}>
        <h2>Sign Up</h2>

        {serverError && (
          <p style={{ color: "red", marginBottom: "10px" }}>{serverError}</p>
        )}

        <SignUpForm onSubmit={handleSignUp} />

        {loading && <p>Loading...</p>}
      </div>
    </div>
  );
}