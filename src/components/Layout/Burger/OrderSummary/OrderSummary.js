import React from "react";
import Auxl from "../../../../hoc/Auxl";

const OrderSummary = (props) => {
    const ingredientSummary = Object.keys( props.ingredients )
    .map( igKey => {
        return (
            <li key={igKey}>
                <span style={{ textTransform: 'capitalize' }}>{igKey}</span>: {props.ingredients[igKey]}
            </li> );
    } );
    return (
        <Auxl>
            <h3> your order</h3>
            <p> A delicious burger with foolowing ingredients:</p>
            <ul>
                {ingredientSummary}
            </ul>
            <p> Continue to checkout?</p>
            <button>CONTINUE</button>
            <button>CANCLE</button>
        </Auxl>

    );

};

export default OrderSummary; 