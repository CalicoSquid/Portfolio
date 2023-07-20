import { Outlet } from "react-router-dom"
import Navbar from "./Navbar.js";


export default function Layout(props) {

    return (
    <div className="layout flex column justify-space-between">
        <Navbar 
        toggle={props.toggle} 
        darkMode={props.darkMode} 
        showNav={props.showNav}
        closeNav={props.closeNav}
        toggleNav={props.toggleNav}
        isMobile={props.isMobile}
        />
        <Outlet />
        <footer className="flex justify-center"><p>Ⓒ 2023 CalicoSquid Code</p></footer>
    </div>
    )
}

