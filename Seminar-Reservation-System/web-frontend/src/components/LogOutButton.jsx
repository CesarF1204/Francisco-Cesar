import { useMutation, useQueryClient } from "react-query";
import { useNavigate } from 'react-router-dom';
import * as apiClient from "../api-client";
import { useAppContext } from "../contexts/AppContext";

const LogOutButton = () => {
    const queryClient = useQueryClient();
    const { showToast } = useAppContext();

    const navigate = useNavigate();

    const mutation = useMutation(apiClient.signOut, {
        onSuccess: async () => {
        // await queryClient.invalidateQueries("validateToken");
        await queryClient.invalidateQueries("validateToken", { exact: true });
            showToast({ message: "Logged Out!", type: "ERROR" });
            navigate("/");
        },
            onError: (error) => {
            showToast({ message: error.message, type: "ERROR" });
        },
    });

    const handleClick = () => {
        mutation.mutate();
    };

    return (
        <button
        onClick={handleClick}
        className="btn btn-danger mt-3"
        >
        Log Out
        </button>
    );
};

export default LogOutButton;