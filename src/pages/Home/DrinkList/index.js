import React, {useState, useEffect} from "react";
import { useNavigate } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux";
import { CocktailActions } from "../../../redux/rootAction";
import { Input } from "antd";
import 'antd/dist/antd.css';
import { ShoppingCartOutlined } from '@ant-design/icons';

function DrinkList() {
    const cocktailsData = useSelector(state => state.CocktailReducer.cocktailsData)
    const [searchCocktailData, setSearchCocktailData] = useState()
    useEffect(() => {
        setSearchCocktailData(cocktailsData)
    }, [cocktailsData])
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { Search } = Input
    const addItemToCart = (itemId) => {
        dispatch(CocktailActions.setSelectedCoctailData(itemId))
    }
    const showCocktaiDetail = (coctaiId) => {
        dispatch(CocktailActions.setDetailCocktailId(coctaiId))
        navigate(`/home/${coctaiId}`)
    }
    const onSearch = (value) => {
        if(value !== "") {
            const searchResult = cocktailsData.filter(element => element.strDrink.indexOf(value) !== -1)
            setSearchCocktailData(searchResult)
        } else setSearchCocktailData(cocktailsData)       
    };
    console.log(cocktailsData)
    console.log(searchCocktailData)
    return (
    <div className="col col-md-12 d-flex flex-column align-items-center drinks-list py-3">
        <h2>List Cocktail</h2>
        <div className="search-cocktail">
            <Search placeholder="" onSearch={onSearch} enterButton />
        </div>
        <div className="d-flex justify-content-between my-3 px-5 align-items-center flex-wrap">
            {searchCocktailData?.map(cocktail => {
                return(
                <div className="col-4 mx-auto my-3 store-item sweets">
                    <div className="card single-item">
                        <div className="img-container">
                             <div className="card-text d-flex justify-content-between text-capitalize">
                                <h5 className="store-item-value">{cocktail?.strGlass}</h5>
                                <h5 className="store-item-value">{cocktail?.strCategory}</h5>
                             </div>
                            <img src={cocktail?.strDrinkThumb} className="card-img-top store-img" alt="" />
                            <button onClick={(e) => addItemToCart(e.target.value)} value={cocktail.idDrink} className="store-item-icon">
                                <ShoppingCartOutlined /> Add to cart 
                            </button>
                        </div>
                        <div className="card-body">
                            <div className="card-text d-flex justify-content-between align-items-center text-capitalize">
                                <p className="d-flex">Title:<h5 className="font-weight-bold text-info ml-2"> {cocktail?.strDrink}</h5></p>
                                <button className="view-detail" onClick={(event) => showCocktaiDetail(event.target.value)} value={cocktail?.idDrink}>view detail</button>
                            </div>
                        </div>
                    </div>
                </div>
                )
            })}
           
            
            <div>
                {/* <button onClick={(e) => deleteTask(e.target.value)} value={task.id} type="submit" className="btn btn-danger btn-sm mr-3">delete</button>
                <button onClick={(e) => editTask(e.target.value)} value={task.id} type="submit" className="btn btn-info btn-sm">Edit</button> */}
            </div>
        </div> 
    </div> 
    );
}
export default DrinkList;