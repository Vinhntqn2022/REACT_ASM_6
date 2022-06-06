import React from "react";
import { useSelector } from "react-redux";
import { Spin } from "antd"
import { useNavigate } from "react-router-dom";

import "./GlobalLoading.css"

function GlobalLoading() {
    const navigate = useNavigate()
    const loading = useSelector(state => state.GlobalReducer.isLoading)
    const error = useSelector(state => state.GlobalReducer.error)
    if(error) {
        navigate("/error")
    }else if(loading === true) {
        return (
            <div className="loading-container"><Spin size="large" /></div>
            )
        } else return null
    }
export default GlobalLoading
   