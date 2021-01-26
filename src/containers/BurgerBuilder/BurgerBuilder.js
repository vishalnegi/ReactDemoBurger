import React, { Component } from 'react';
import Aux from '../../hoc/Auxillary';
import Burger from '../../components/Burger/Burger'
import BuildControls from '../../components/Burger/BuildControls/BuildControls'

const INGREDIENT_PRICES = {
    salad: 0.5,
    cheese: 0.4,
    meat: 1.3,
    bacon: 0.7
}

class BurgerBuilder extends Component {

    // constructor(props) {
    //     super(props);
    //     this.state = {...}
    // }

    state = {
        ingredients: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0
        },
        totalPrice: 4
    }

    addIngredientHandler = (type) => {
        const count = this.state.ingredients[type] + 1
        const updatedIngredients = {
            ...this.state.ingredients
        }
        updatedIngredients[type] = count;
        console.log(type, this.state.totalPrice, INGREDIENT_PRICES[type])
        const price = INGREDIENT_PRICES[type] + this.state.totalPrice
        this.setState({ totalPrice: price, ingredients: updatedIngredients })
    }

    removeIngredientHandler = (type) => {
        const count = this.state.ingredients[type] ? this.state.ingredients[type] - 1 : 0
        const updatedIngredients = {
            ...this.state.ingredients
        }
        updatedIngredients[type] = count;
        const price = this.state.totalPrice - INGREDIENT_PRICES[type]
        this.setState({ totalPrice: price, ingredients: updatedIngredients })
    }

    render() {

        const disabledInfo = {
            ...this.state.ingredients
        };

        for (let key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <= 0
        }

        return (
            <Aux>
                <Burger ingredients={this.state.ingredients} />
                {this.state.totalPrice}
                <BuildControls
                    ingredientAdded={this.addIngredientHandler}
                    ingredientRemoved={this.removeIngredientHandler}
                    disabled={disabledInfo}
                />
            </Aux>
        );
    }
}

export default BurgerBuilder;