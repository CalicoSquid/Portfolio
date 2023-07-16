
import { NavLink } from "react-router-dom";
import laptop from "../Images/contact.png";
import ClickAwayListener from '@mui/base/ClickAwayListener';


export default function Navbar(props) {

    const activeLinkStyle = {   
        color: "#F04B54",
    }

    return (
        <nav className="navbar flex justify-space-between">
            <div className="header">
                <NavLink to="/">
                    <img src={laptop} style={{height: "50px"}}/>
                </NavLink>
            </div>
            
            <button 
                aria-controls="primary-nav" 
                aria-expanded="false"
                onClick={props.toggleNav}
                className="toggle-nav"
            >
                <span className="sr-only">Menu</span>
                <i className={`fa-solid ${props.showNav ? "fa-xmark" : "fa-bars"}`}/>                   
            </button>
            
            {(props.showNav || !props.isMobile) && 
            <ClickAwayListener onClickAway={props.closeNav}>
                <div className="nav-links flex">
                <NavLink 
                to="about" 
                className="link" 
                onClick={props.toggleNav}
                style={({isActive}) => isActive ? activeLinkStyle : null}
                >
                About Me
                </NavLink>

                <NavLink 
                to="projects" 
                className="link" 
                onClick={props.toggleNav}
                style={({isActive}) => isActive ? activeLinkStyle : null}
                >
                Projects
                </NavLink>

                <NavLink 
                to="contact" 
                className="link" 
                onClick={props.toggleNav}
                style={({isActive}) => isActive ? activeLinkStyle : null}
                >
                Contact
                </NavLink>

                <button 
                    className="dark-mode-toggle" 
                    onClick={props.toggle}
                >
                    {
                    props.darkMode ?
                    <i className="fa-solid fa-sun toggle"></i> 
                    :
                    <i className="fa-solid fa-moon toggle"></i>
                     }
                </button>
            </div>
            </ClickAwayListener>
            } 
        </nav>
    )
}