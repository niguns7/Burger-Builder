import React, { Component } from "react";

import Auxl from "../../hoc/Auxl";
import classes from "./Layout.module.css";
import Toolbar from "../Navigation/Toolbar";
import SideDrawer from "../Navigation/Sidedrawer/SideDrawer";


class Layout extends Component {
    state = {  
        showSideDrawer: false
    }
    sideDrawerHandler = () => {
        this.setState({showSideDrawer: false}); //side drawer closing halnding function

    }
    //back aauna ko lagi previous statw ni call gareko
    sideDrawerToggleHandler = () => {
        this.setState( (prevState) => { 
            return {showSideDrawer: !this.state.showSideDrawer}
        });
    }
    //pasing prop ot the side dreawe
    //toolbar ma ideDrawerToggleHandler chai DrawerTogglehandler ko through pass gareko xa

    render () {
        return (
            <Auxl>
            <Toolbar DrawerToggleClicked={this.sideDrawerToggleHandler}/>     
            <SideDrawer 
            open={this.state.showSideDrawer} 
            closed={this.sideDrawerHandler}/> 
            <main className={classes.Content}>
                {this.props.children}
            </main>

        </Auxl>
        )
    }
}  




export default Layout;