export async function registerUser(userData) {
    const res = await fetch("http://localhost:5000/api/auth/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(userData),
    });
  
    if (!res.ok) {
      const error = await res.json();
      throw new Error(error.message || "Failed to register");
    }
  
    return res.json();
  }
  