import React from "react";
import { useSelector } from "react-redux";

export default function CoctailDetail() {
    const detailCocktailId = useSelector(state => state.CocktailReducer.detailCocktailId)
    return(
        <section className="cocktail py-5">
            <div className="container">
                <div className="row">
                    <div className="col-10 mx-auto col-md-6 my-5">
                        <h1 className="text-capitalize">How to make a cup of <strong >{detailCocktailId.strDrink}</strong></h1>
                        <p>{detailCocktailId.strInstructions}</p>
                        <ul>
                            {(detailCocktailId.strIngredient1) && (<li className="text-capitalize text-dark font-weight-bold">{detailCocktailId.strIngredient1}: {detailCocktailId.strMeasure1}</li>)}
                            {(detailCocktailId.strIngredient2) && (<li className="text-capitalize text-dark font-weight-bold">{detailCocktailId.strIngredient2}: {detailCocktailId.strMeasure2}</li>)}
                            {(detailCocktailId.strIngredient3) && (<li className="text-capitalize text-dark font-weight-bold">{detailCocktailId.strIngredient3}: {detailCocktailId.strMeasure3}</li>)}
                            {(detailCocktailId.strIngredient4) && (<li className="text-capitalize text-dark font-weight-bold">{detailCocktailId.strIngredient4}: {detailCocktailId.strMeasure4}</li>)}
                            {(detailCocktailId.strIngredient5) && (<li className="text-capitalize text-dark font-weight-bold">{detailCocktailId.strIngredient5}: {detailCocktailId.strMeasure5}</li>)}
                            {(detailCocktailId.strIngredient6) && (<li className="text-capitalize text-dark font-weight-bold">{detailCocktailId.strIngredient6}: {detailCocktailId.strMeasure6}</li>)}
                            {(detailCocktailId.strIngredient7) && (<li className="text-capitalize text-dark font-weight-bold">{detailCocktailId.strIngredient7}: {detailCocktailId.strMeasure7}</li>)}
                            {(detailCocktailId.strIngredient8) && (<li className="text-capitalize text-dark font-weight-bold">{detailCocktailId.strIngredient8}: {detailCocktailId.strMeasure8}</li>)}
                        </ul>
                    </div>
                    <div className="col-10 mx-auto col-md-6 my-5 align-self-center">
                        <div className="cocktail-img__container">
                            <img src={detailCocktailId.strDrinkThumb} class="img-fluid" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}