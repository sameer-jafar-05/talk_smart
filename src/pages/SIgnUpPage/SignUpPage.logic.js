import { useState } from "react";

export function useSignUpPage(){
    const [loading , setLoading] = useState(false);
    const [serverError , setServerError] = useState("");

    const handleSignUp = async(formData) =>{
        try{
            setLoading(true);
            serverError("");

            const response = await 
        fetch("https:api.exampl.com/signup" ,{
            method:"POST" , 
            headers:{"Content-Type" : "application/json"} , 
            body:JSON.stringify(formData)
        });
        }
    
}