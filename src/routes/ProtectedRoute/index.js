import React from "react";
import { Navigate } from "react-router-dom";

import { useSelector } from "react-redux";
import { checkToken } from "../../utils/checkToken";


const ProtectedRoute = ({ children }) => {
    const token = useSelector(state => state.AuthReducer.token)
    if (checkToken(token) === false) {
        return <Navigate to="/signin" replace />
    } else return children
}
export { ProtectedRoute }
