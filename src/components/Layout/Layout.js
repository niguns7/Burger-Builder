import React, { Component } from "react";

import Auxl from "../../hoc/Auxl";
import classes from "./Layout.module.css";
import Toolbar from "../Navigation/Toolbar";
import SideDrawer from "../Navigation/Sidedrawer/SideDrawer";


class Layout extends Component {
    state = {  
        showSideDrawer: true
    }
    sideDrawerHandler = () => {
        this.setState({showSideDrawer: false}); //side drawer closing halnding function

    }
    //pasing prop ot the side dreawe

    render () {
        return (
            <Auxl>
            <Toolbar />
            <SideDrawer open={this.state.showSideDrawer} closed={this.sideDrawerHandler}/> 
            <main className={classes.Content}>
                {this.props.children}
            </main>

        </Auxl>
        )
    }
}  




export default Layout;