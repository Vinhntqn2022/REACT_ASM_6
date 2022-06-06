import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cocktailsData: null,
    detailCocktailId: null,
    selectedCoctailData: []
}
const cocktailSlice = createSlice({
    name: "cocktailSlice",
    initialState: initialState,
    reducers: {
        setCocktailData(state, action) {
            state.cocktailsData = action.payload
        },
        setSelectedCoctailData(state, action) {
            const selectedCocktail = state.cocktailsData.filter(coctail => coctail.idDrink === action.payload)
            state.selectedCoctailData = [...state.selectedCoctailData, ...selectedCocktail]
        },
        deleteItemId(state, action) {
            state.selectedCoctailData = [...state.selectedCoctailData].filter(el => el.idDrink !== action.payload)
        },
        setDetailCocktailId(state, action) {
            state.detailCocktailId = state.cocktailsData.filter(coctail => coctail.idDrink === action.payload)[0]
        },
       
    }
})
const { actions, reducer } = cocktailSlice;
export {actions as CocktailActions, reducer as CocktailReducer}