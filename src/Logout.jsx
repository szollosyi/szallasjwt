import React from "react";
import { useNavigate } from "react-router-dom";

export const Logout = () => {
    const navigate = useNavigate();
    const handleLogout = () => {
        localStorage.removeItem('jwt');
        navigate('/');
    }

        return(
            <div>
                <h1>Kijelentkezes</h1>
                <button onClick={handleLogout}>Kijelentkezes</button>
            </div>
        )
}