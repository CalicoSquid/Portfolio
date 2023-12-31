
import { NavLink } from "react-router-dom";
import avatar from "../Images/avatar.png";
import { ClickAwayListener } from "@mui/base";


export default function Navbar({toggleNav, showNav, closeNav, isMobile}) {

    const activeLinkStyle = {   
        color: "#F04B54",
    }

    return (
        <nav className="navbar flex justify-space-between">
            <div className="header">
                <NavLink to="/">
                    <div className="avatar-container">
                    <img src={avatar} style={{height: "50px"}} alt=""/>
                    <canvas className="replica-canvas"></canvas>
                    </div>
                </NavLink>
            </div>
            
            <button 
                aria-controls="primary-nav" 
                aria-expanded="false"
                onClick={toggleNav}
                className="toggle-nav"
            >
                <span className="sr-only">Menu</span>
                <i className={`fa-solid ${showNav ? "" : "fa-bars"}`}/>                   
            </button>
            
            {(showNav || !isMobile) && 
            <ClickAwayListener onClickAway={closeNav}>
                <div className="nav-links flex">
                <NavLink 
                to="about" 
                onClick={closeNav}
                className="link" 
                style={({isActive}) => isActive ? activeLinkStyle : null}
                >
                About Me
                </NavLink>

                <NavLink 
                to="projects/savor" 
                className="link" 
                style={({isActive}) => isActive ? activeLinkStyle : null}
                //onClick={closeNav}
                >
                Projects
                </NavLink>

                <NavLink 
                to="contact" 
                onClick={closeNav}
                className="link" 
                style={({isActive}) => isActive ? activeLinkStyle : null}
                >
                Contact
                </NavLink>
            </div>
            </ClickAwayListener>
            } 
        </nav>
    )
}