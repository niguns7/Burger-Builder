import React, { Component } from "react";
import Auxl from "../../hoc/Auxl";
import Burger from "../../components/Layout/Burger/Burger";
import BuildContrls from "../../components/Layout/Burger/BuildControls/BuildContrls";
import  Modal from "../../components/UI/Modal/Modal";
import OrderSummary from "../../components/Layout/Burger/OrderSummary/OrderSummary";

const INGREDIENT_PRICES = {
    salad: 0.5,
    cheese: 0.4,
    meat: 1.5,
    bacon: 0.7,
}

class BurgerBuilder extends Component {

    state = {
        ingredients: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat : 0

        },
        totalPrice: 4,
        purchasable:false,
        purchasing: false
    }

    updatePurchaseState (ingredients) { //passingnew updated ingredients
        const sum = Object.keys(ingredients) //cionverting the object into arrayy
        .map((igkey) => { 
            return ingredients[igkey]; //we just wannt to take the index of the objects
        })
        .reduce ((sum, element) => { //element is the value excessed in previous step
            return sum + element;
        }, 0);
        this.setState({purchasable: sum>0}) //if sum is grater than zero than then our order now button doesnt functions
    }

    addIngredientHandler = (type) => {
        const oldCount =this.state.ingredients[type];
        const updatedCount = oldCount + 1;
        const updatedIngredients = {
            ...this.state.ingredients
        };
        updatedIngredients[type] = updatedCount;
        const priceAddition = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice + priceAddition;
        this.setState({totalPrice: newPrice, ingredients: updatedIngredients})
        this.updatePurchaseState(updatedIngredients);
    }

    removeIngredientHandler = (type) => {
        const oldCount =this.state.ingredients[type];
        if (oldCount <= 0) {
            return
        }
        const updatedCount = oldCount -1;
        const updatedIngredients = {
            ...this.state.ingredients
        };
        updatedIngredients[type] = updatedCount;
        const priceDeduction = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice - priceDeduction;
        this.setState({totalPrice: newPrice, ingredients: updatedIngredients})
        this.updatePurchaseState(updatedIngredients);
    }


    purchaseHAndler=() =>  {
        this.setState({
            purchasing : true
        }
        );
    }
    render() {
        const disabledInfo = {
            ...this.state.ingredients
        };
        for (let key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <=0
        }
        return (
            <Auxl> 
                <Modal show={this.state.purchasing} modalclosed>
                    <OrderSummary ingredients={this.state.ingredients}/>
                </Modal>
                <Burger ingredients={this.state.ingredients}/>
                <BuildContrls
                ingredientAdded={this.addIngredientHandler} 
                ingredientRemoved={this.removeIngredientHandler}
                disabled={disabledInfo}
                purchasable={this.state.purchasable}
                ordered= {this.purchaseHAndler}
                price={this.state.totalPrice}
                />
            </Auxl>
        );
    }
}

export default BurgerBuilder;