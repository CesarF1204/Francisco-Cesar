// import { RegisterFormData as formData } from "./pages/Register";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const register = async (formData) => {
    const response = await fetch(`${API_BASE_URL}/api/auth/register`, {
        method: "POST",
        headers: {
            "Content-type": "application/json",
        },
        body: JSON.stringify(formData),
    });

    const responseBody = await response.json();
    if (!response.ok) {
      throw new Error(responseBody.message); // Throw an error if the response is not ok
    }
};

const signIn = async (formData) => {
    const response = await fetch(`${API_BASE_URL}/api/auth/login`, {
        method: "POST",
        credentials: "include",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
    });

    const body = await response.json();

    if (!response.ok) {
        throw new Error(body.message);
    }

    return body;
};

// Validate a token
const validateToken = async () => {
    const response = await fetch(`${API_BASE_URL}/api/auth/validate-token`, {
        credentials: "include",
    });

    if (!response.ok) {
        // Handle specific error responses here if needed
        return { success: false, message: "Token is invalid or expired." };
    }

    return response.json();
};

const signOut = async () => {
    const response = await fetch(`${API_BASE_URL}/api/auth/logout`, {
        credentials: "include",
        method: "POST",
});

    if (!response.ok) {
        throw new Error("Error during sign out");
    }
};

const fetchAllSeminar = async () => {
    const response = await fetch(`${API_BASE_URL}/api/seminars`, {
        method: "GET",
        credentials: "include",
        headers: {
            "Content-Type": "application/json",
        }
    });

    const data = await response.json();
    
    if (!response.ok) {
      throw new Error(data.message); // Throw an error if the response is not ok
    }

    return data;
}

export {register, signIn, signOut, validateToken, fetchAllSeminar};