import React, { Component } from "react";
import Auxl from "../../hoc/Auxl";
import Burger from "../../components/Layout/Burger/Burger";
import BuildContrls from "../../components/Layout/Burger/BuildControls/BuildContrls";
class BurgerBuilder extends Component {

    state = {
        ingredients: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat : 0

        }
    }

    render() {
        return (
            <Auxl> 
                <Burger ingredients={this.state.ingredients}/>
                <BuildContrls />
            </Auxl>
        );
    }
}

export default BurgerBuilder;