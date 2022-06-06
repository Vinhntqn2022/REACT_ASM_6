import { combineReducers } from "redux";

import { AuthReducer } from "./slices/AuthSlice";
import { CocktailReducer } from "./slices/cocktailSlice";
import { GlobalReducer } from "./slices/GlobalSlice";

const rootReducer = combineReducers({
    AuthReducer,
    CocktailReducer,
    GlobalReducer
})
export default rootReducer;