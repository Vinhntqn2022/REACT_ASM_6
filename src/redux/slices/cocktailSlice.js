import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cocktailsData: null,
    selectedCoctailData: []
}
const cocktailSlice = createSlice({
    name: "cocktailSlice",
    initialState: initialState,
    reducers: {
        setCocktailData(state, action) {
            const api = action.payload
            state.cocktailsData = api.map(cocktail => {
                cocktail.count = 0
                return cocktail
            })
        },
        setSelectedCoctailData(state, action) {
            const selectedCocktail = state.cocktailsData.filter(coctail => coctail.idDrink === action.payload)
            state.selectedCoctailData = [...state.selectedCoctailData, ...selectedCocktail]
            state.selectedCoctailData.forEach(cocktail => {
                if(cocktail.idDrink === action.payload) {
                    ++ cocktail.count 
                }
            })   
            state.selectedCoctailData = state.selectedCoctailData.reduce((cocktailAcc, cocktail) => {
                const result = cocktailAcc.find(item => item.idDrink === cocktail.idDrink)
                if(!result) {
                    return cocktailAcc.concat([cocktail])
                } else {
                    return cocktailAcc
                }
            }, []);
        },
        deleteItemId(state, action) {
            state.selectedCoctailData = [...state.selectedCoctailData].filter(el => el.idDrink !== action.payload)
        },
        decreaseCount (state, action) {
            state.selectedCoctailData = [...state.selectedCoctailData].map(cocktail => {
                if(cocktail.idDrink === action.payload) {
                    (cocktail.count > 1) && (cocktail.count = cocktail.count - 1);
                    return cocktail
                } return cocktail
            })
        },   
        increaseCount (state, action) {
            state.selectedCoctailData = [...state.selectedCoctailData].map(cocktail => {
                if(cocktail.idDrink === action.payload) {
                    cocktail.count = cocktail.count + 1;
                    return cocktail
                } return cocktail
            })
        }  
    }
})
const { actions, reducer } = cocktailSlice;
export {actions as CocktailActions, reducer as CocktailReducer}