import React from "react";
import Burgering from "./Burgering/Burgering";
import classes from "./Burger.css"

const burger = (props) => {
    return(
        <div className={classes.Burger}>
            <Burgering />
            <Burgering />
            <Burgering />
            <Burgering />
        </div>
    );

};

export default burger;