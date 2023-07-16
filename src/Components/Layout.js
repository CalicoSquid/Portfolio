import { Outlet } from "react-router-dom"
import Navbar from "./Navbar.js";


export default function Layout(props) {

    return (
    <div className="layout flex column justify-space-between">
        <Navbar toggle={props.toggle} darkMode={props.darkMode} broken={props.broken} breakEverything={props.breakEverything}/>
        <Outlet />
        <footer>Ⓒ 2023 CalicoSquid Code</footer>
    </div>
    )
}

