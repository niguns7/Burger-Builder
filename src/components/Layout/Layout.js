import React from "react";

import Auxl from "../../hoc/Auxl";
import classes from "./Layout.module.css";
import Toolbar from "../Navigation/Toolbar";
import SideDrawer from "../Navigation/Sidedrawer/SideDrawer";


const Layout = (props) => (  
        <Auxl>
            <Toolbar />
            <SideDrawer/>
            <main className={classes.Content}>
                {props.children}
            </main>

        </Auxl>

);

export default Layout;