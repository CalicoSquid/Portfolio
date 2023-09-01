import { Outlet } from "react-router-dom"
import Navbar from "./Navbar.js";
import squid from "../Images/squid-white.png";

export default function Layout({showNav, closeNav, toggleNav, isMobile}) {

    return (
    <div className="layout flex column justify-space-between">
        <Navbar 
        showNav={showNav}
        closeNav={closeNav}
        toggleNav={toggleNav}
        isMobile={isMobile}
        />
        <Outlet />
        <footer className="flex justify-center">
            <img src={squid} style={{height: "50px"}} alt=""/>
            <p>Ⓒ 2023 CalicoSquid Code</p>
        </footer>
    </div>
    )
}

