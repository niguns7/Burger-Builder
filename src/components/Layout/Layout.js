import React from "react";

import Auxl from "../../hoc/Auxl";
import classes from "./Layout.css";


const Layout = (props) => (    
        <Auxl>
            <div> Toolbar,slidebar,backdrop</div>
            <main className={classes.Content}>
                {props.children}
            </main>

        </Auxl>

);

export default Layout;