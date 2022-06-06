import React from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";


const AuthRoute = ({ children }) => {
    const token = useSelector(state => state.AuthReducer.token)
    if (token) {
        return <Navigate to="/home" replace />
    } else return children
}
export { AuthRoute }
