import React from "react";
import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import classes from "./SideDrawer.module.css"
import Backdrop from "../../UI/Modal/Backdrop/Backdrop";
import Auxl from "../../../hoc/Auxl"

const SideDrawer = (props) => {
    let attachedClasses = [classes.SideDrawer, classes.Close];
    if (props.open) {
        attachedClasses = [classes.SideDrawer, classes.Open]
    }

    return(
        <Auxl>
        <Backdrop show={props.open} clicked={props.closed}/> 
        <div className={attachedClasses.join(' ')}>
            <div className={classes.Logo}>
            <Logo />
            </div>
            
            <nav><NavigationItems /></nav>
            
        </div>
        </Auxl>
    );
}

export default SideDrawer;