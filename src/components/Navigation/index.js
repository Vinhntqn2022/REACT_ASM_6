import React from "react";
import { NavLink, useNavigate } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import 'antd/dist/antd.css';
import { Button } from "antd"
import {PhoneOutlined, ShoppingCartOutlined} from '@ant-design/icons';

import "./Navigation.css"
import { AuthActions } from "../../redux/rootAction";

function Navigation () {
   const token = useSelector(state => state.AuthReducer.token)
  const dispatch = useDispatch();
   const cocktailSelectedCount = useSelector(state => state.CocktailReducer.selectedCoctailData)
   const itemCount = cocktailSelectedCount.reduce((acc, current) => {
     return acc + current.count
   }, 0)
   const navigate = useNavigate()
   const handleLogout = () => {
    dispatch(AuthActions.setToken(null))
    navigate("/")
     }
   const showSelectedCocktail = () => {
      navigate("/cart")
   }
    return (
       <nav className="navbar bg-info">
         {(!token) ?
          (<div className="d-flex justify-content-start">        
            <NavLink className="navbar-item mx-3 text-dark" to="/signin">Login</NavLink>
            <NavLink className="navbar-item mx-3 text-dark" to="/">Home</NavLink>
         </div>)
         :  
         <>
         
         <div className="d-flex justify-content-start align-items-center">        
            <NavLink className="navbar-item mr-3 text-dark" to="/"><Button className="text-dark" onClick={handleLogout} type="link">Logout</Button></NavLink>
            <NavLink className="navbar-item mr-3 text-dark" to="/">Home</NavLink>
         </div>
         <div className="nav-info-items d-none d-lg-flex align-items-center">
          <div className="nav-info d-flex align-items-center justify-content-between mx-lg-5">
               <span>
               <PhoneOutlined />
               </span>
            <p className="mb-0">+ 123 456 789</p>
          </div>
          <div onClick={showSelectedCocktail} className="nav-info cart-info d-flex align-items-center justify-content-between mx-lg-5">
            <ShoppingCartOutlined className="cart-info__icon"/>
            <p className="mb-0 ml-2 text-capitalize">
              <span>{itemCount} </span>
              items
            </p>
          </div>
        </div>
         </>
         }
       </nav>
    );
}
export default Navigation;