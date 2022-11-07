import React from "react";
import Auxl from "../../../../hoc/Auxl";
import Button from "../../../UI/Button/Button";


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
            <p><strong>Total price: {props.price.toFixed(2)}</strong></p>
            <p> Continue to checkout?</p>
            <Button btnType="Danger" clicked={props.purchaseCancled}>CANCEL</Button>
            <Button btnType="Success" clicked={props.PurchaseContinued}>CONTINUE</Button>
        </Auxl>

    );

};

export default OrderSummary; 