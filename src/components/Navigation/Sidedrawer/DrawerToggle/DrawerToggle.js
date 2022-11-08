import React from "react";
import classes from "./DrawerToggle.module.css"

//just for a hamburger menu yo chai toolbar component ma call gareko xa
const DrawerToggle = (props) => (
    <div className={classes.DrawerToggle} onClick={props.clicked}>
        <div></div>
        <div></div>
        <div></div>
    </div>

);

export default DrawerToggle;