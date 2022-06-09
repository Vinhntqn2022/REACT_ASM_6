import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { CocktailActions } from "../../redux/rootAction";
import 'antd/dist/antd.css';
import { useNavigate } from "react-router-dom";
import { DeleteOutlined } from '@ant-design/icons';

function App() {
    const selectedCoctailData = useSelector(state => state.CocktailReducer.selectedCoctailData)
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const deleteItem = (deleteId) => { 
        dispatch(CocktailActions.deleteItemId(deleteId))
      }
      const showCocktaiDetail = (coctaiId) => {
        navigate(`/home/cocktails/${coctaiId}`)
    }
    const decreaseCount = (count) => {
        dispatch(CocktailActions.decreaseCount(count))
    }
    const increaseCount = (count) => {
        dispatch(CocktailActions.increaseCount(count))
    }
    return (
    <div className="col col-md-12 d-flex flex-column align-items-center drinks-list py-3">
        <h2>List Selected Cocktail</h2>
        <div className="d-flex justify-content-between my-3 px-5 align-items-center flex-wrap">
            {selectedCoctailData?.map(cocktail => {
                return(
                <div class="col-sm-10 col-md-6 col-lg-5 mx-auto my-3 store-item sweets">
                    <div className="card single-item">
                        <div className="img-container">
                            <h5 className="store-item-value">{cocktail?.strGlass}</h5>
                            <img src={cocktail?.strDrinkThumb} className="card-img-top store-img img-fluid" alt="" />
                            <button onClick={(e) => deleteItem(e.target.value)} value={cocktail.idDrink} className="store-item-icon">
                                <DeleteOutlined /> Remove Cocktail
                            </button>
                        </div>
                        <div className="card-body">
                            <div className="card-text d-flex justify-content-between align-items-center text-capitalize">
                                <h5 id="store-item-name">{cocktail?.strDrink}</h5> 
                                     <p className="d-flex align-items-center"><button className="view-detail h3 mr-2" onClick={(event) => decreaseCount(event.target.value)} value={cocktail?.idDrink}>-</button>Count: {cocktail?.count}<button className="view-detail h3 ml-2 mt-2" onClick={(event) => increaseCount(event.target.value)} value={cocktail?.idDrink}>+</button></p> 
                                <button className="view-detail" onClick={(event) => showCocktaiDetail(event.target.value)} value={cocktail?.idDrink}>view detail</button>
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