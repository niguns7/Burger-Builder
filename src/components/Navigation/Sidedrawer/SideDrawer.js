import React from "react";
import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import classes from "./SideDrawer.module.css"
import Backdrop from "../../UI/Modal/Backdrop/Backdrop";
import Auxl from "../../../hoc/Auxl"

const SideDrawer = (props) => {
    return(
        <Auxl>
        <Backdrop show/> 
        <div className={classes.SideDrawer}>
            <div className={classes.Logo}>
            <Logo />
            </div>
            
            <nav><NavigationItems /></nav>
            
        </div>
        </Auxl>
    );
}

export default SideDrawer;