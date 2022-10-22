import React, { Component } from "react";
import Auxl from "../../hoc/Auxl";
import Burger from "../../components/Layout/Burger/Burger";

class BurgerBuilder extends Component {
    render() {
        return (
            <Auxl> 
                <Burger />
                <div>Build Controls</div>
            </Auxl>
        );
    }
}

export default BurgerBuilder;