import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { CocktailActions } from "../../../redux/rootAction";
import 'antd/dist/antd.css';
import { DeleteOutlined } from '@ant-design/icons';

function App() {
    const selectedCoctailData = useSelector(state => state.CocktailReducer.selectedCoctailData)
    const dispatch = useDispatch()
    const deleteItem = (deleteId) => { 
        dispatch(CocktailActions.deleteItemId(deleteId))
      }
    return (
    <div className="col col-md-12 d-flex flex-column align-items-center drinks-list py-3">
        <h2>List Selected Cocktail</h2>
        <div className="d-flex justify-content-between my-3 px-5 align-items-center flex-wrap">
            {selectedCoctailData?.map(cocktail => {
                return(
                <div class="col-4 mx-auto my-3 store-item sweets">
                    <div className="card single-item">
                        <div className="img-container">
                             <h5 className="store-item-value">{cocktail?.strGlass}</h5>
                            <img src={cocktail?.strDrinkThumb} className="card-img-top store-img" alt="" />
                            <button onClick={(e) => deleteItem(e.target.value)} value={cocktail.idDrink} className="store-item-icon">
                                <DeleteOutlined /> Remove Cocktail
                            </button>
                        </div>
                        <div className="card-body">
                            <div className="card-text d-flex justify-content-between text-capitalize">
                            <h5 id="store-item-name">{cocktail?.strDrink}</h5>
                            </div>
                        </div>
                    </div>
                </div>
                )
            })}
           
        </div> 
    </div> 
    );
}
export default App;