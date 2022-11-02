import React from "react";

import Auxl from "../../hoc/Auxl";
import classes from "./Layout.module.css";


const Layout = (props) => (    
        <Auxl>
            <main className={classes.Content}>
                {props.children}
            </main>

        </Auxl>

);

export default Layout;