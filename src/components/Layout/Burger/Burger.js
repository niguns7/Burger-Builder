import React from "react";
import Burgering from "./Burgering/Burgering";
import classes from "./Burger.module.css"

const burger = (props) => {
    // transforming object into array
    let transformedingredients = Object.keys(props.ingredients)
    .map(igkey => {
        //creating an array
        return [...Array( props.ingredients[igkey] )].map(( _ , i)=> {
            return <Burgering key={igkey + i} type={igkey} />
        });
    })
    .reduce ((arr,el) => {
        return arr.concat(el)
    }, []);

    if (transformedingredients.length === 0) {
        transformedingredients = <p> Please start adding ingrediens!</p>
    }
    
    return (
        <div className={classes.Burger}>
            <Burgering type="bread-top" />
            {transformedingredients}
            <Burgering type="bread-bottom" />
        </div>
    );

};

export default burger;