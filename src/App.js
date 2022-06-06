
import './App.css';
import { Routes, Route } from "react-router-dom"
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios"

import SignUp from "./pages/SignUp"
import SignIn from "./pages/SignIn"
import Home from "./pages/Home";

import GlobalLoading from './components/GlobalLoading';
import { AuthActions, CocktailActions, GlobalActions } from "./redux/rootAction";
import { ProtectedRoute } from "./routes/ProtectedRoute"
import { AuthRoute } from "./routes/AuthRoute"
import NotFound from "./pages/NotFound";
import Navigation from "./pages/Navigation";
import SelectedCocktail from "./pages/Home/SelectedCocktail"
import CocktailDetail from "./pages/Home/CocktailDetail"


function App() {
    const detailCocktailId = useSelector(state => state.CocktailReducer.detailCocktailId)
    const token = useSelector(state => state.AuthReducer.token)
    console.log(detailCocktailId?.idDrink)
    const dispatch = useDispatch()
    useEffect(() => {
        const items = JSON.parse(localStorage.getItem('token'));
        if (items) {
         dispatch(AuthActions.setToken(items));
        }
      }, []);
    useEffect(() => {
        localStorage.setItem('token', JSON.stringify(token));
    }, [token])
    const getListCocktails = async () => {
      dispatch(GlobalActions.setIsLoading(true))
      try {
        const res = await axios.get("https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a")
        dispatch(CocktailActions.setCocktailData(res.data?.drinks))
      }catch (error) {
        console.log(error)
      } finally {
        dispatch(GlobalActions.setIsLoading(false))
      }
    }
    useEffect(() => {
      getListCocktails()
    }, [])
      
   return (
     <>
      <GlobalLoading />
      <Navigation />
      <Routes> 
        <Route path="/" element={
          <AuthRoute >
            <SignIn />
          </AuthRoute>
        }/>
        <Route path="signin" element={
          <AuthRoute >
            <SignIn />
          </AuthRoute>
        }/>
          <Route path="signup" element={
          <AuthRoute >
            <SignUp />
          </AuthRoute>
        }/>
        <Route path="home" element={
          <ProtectedRoute>
            <Home />
          </ProtectedRoute>
        }/>
        <Route path="cart" element={<SelectedCocktail />} />
        <Route path={`home/${detailCocktailId?.idDrink*1}`} element={
            <CocktailDetail />
        }/>
        <Route path='*' element={<NotFound />}/>
      </Routes>
     </>
  )
}
export default App;
