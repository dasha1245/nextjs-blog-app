import {Fragment} from "react";
import MainNavbar from "@/components/layout/main-navbar";

function Layout(props) {
    return (
        <Fragment>
            <MainNavbar/>
            <main>{props.children}</main>
        </Fragment>
    )
}

export default Layout;