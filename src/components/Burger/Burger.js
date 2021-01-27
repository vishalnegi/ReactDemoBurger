import React from 'react';
import './Burger.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burger = (props) => {
    let transformedIngredients = Object.keys(props.ingredients).map(igKey => {
        return [...Array(props.ingredients[igKey])].map((_, i) => {
            return <BurgerIngredient key={igKey + i} type={igKey} />
        })
    }).reduce((acc, curr) => {
        return [...acc, ...curr]
    }, [])


    if (transformedIngredients.length === 0) {
        transformedIngredients = <p>Please start adding ingredients</p>
    }
    return (
        <div className="Burger">
            <BurgerIngredient type="bread-top" />
            <div>------------------------------</div>
            {transformedIngredients}
            <div>------------------------------</div>
            <BurgerIngredient type="bread-bottom" />
        </div>
    );
}

export default burger;