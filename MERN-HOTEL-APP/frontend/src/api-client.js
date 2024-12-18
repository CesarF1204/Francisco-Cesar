import { RegisterFormData as formData } from "./pages/Register";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const register = async (formData) => {
    const response = await fetch(`${API_BASE_URL}/api/users/register`, {
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

export const signIn = async (formData) => {
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
export const validateToken = async () => {
    const response = await fetch(`${API_BASE_URL}/api/auth/validate-token`, {
        credentials: "include",
    });

    if (!response.ok) {
        throw new Error("Token invalid");
    }

    return response.json();
};

export const signOut = async () => {
    const response = await fetch(`${API_BASE_URL}/api/auth/logout`, {
        credentials: "include",
        method: "POST",
});

    if (!response.ok) {
        throw new Error("Error during sign out");
    }
};