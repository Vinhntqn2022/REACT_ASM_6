import React from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";


const ProtectedRoute = ({ children }) => {
    const token = useSelector(state => state.AuthReducer.token)
    if (token !== null) {
        return children
    } else return <Navigate to="/" replace />
}
export { ProtectedRoute }
