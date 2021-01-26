import React from 'react';
import './Burger.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';
// import Badge from 'react-bootstrap/Badge'
// import logo from '../../logo.svg';

const burger = (props) => {
    let transformedIngredients = Object.keys(props.ingredients).map(igKey => {
        return [...Array(props.ingredients[igKey])].map((_, i) => {
            return <BurgerIngredient key={igKey + i} type={igKey} />
        })
    }).reduce((acc, curr) => {
        return [...acc, ...curr]
    }, [])

    console.log(transformedIngredients)

    if (transformedIngredients.length === 0) {
        transformedIngredients = <p>Please start adding ingredients</p>
    }
    return (
        <div className="Burger">
            {/* <Badge variant="dark">Burger</Badge> */}
            {/* <img src={logo} className="BurgerImage" /> */}
            <BurgerIngredient type="bread-top" />
            {/* <BurgerIngredient type="cheese" />
            <BurgerIngredient type="meat" /> */}
            <div>------------------------------</div>
            {transformedIngredients}
            <div>------------------------------</div>
            <BurgerIngredient type="bread-bottom" />
        </div>
    );
}

export default burger;