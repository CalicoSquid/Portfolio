import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import laptop from "../Images/contact.png";


export default function Navbar(props) {

    const [width, setWidth] = useState(window.innerWidth);
    const [showNav, setShowNav] = useState(false)
    const isMobile = width <= 640;

    const activeLinkStyle = {   
        color: "#F04B54",
    }

    const toggleNav = () => setShowNav(prev => !prev)


    useEffect(() => {
        window.addEventListener('resize', () => setWidth(window.innerWidth));

        return () => { 
            window.removeEventListener('resize', () => setWidth(window.innerWidth));
        }
    }, []);

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
                onClick={toggleNav}
                className="toggle-nav"
                >
                    <span className="sr-only">Menu</span>
                    <i className={`fa-solid ${showNav ? "fa-xmark" : "fa-bars"}`}/>                   
            </button>
            
            {(showNav || !isMobile) && 
            <div className="nav-links flex">
                <NavLink 
                to="about" 
                className="link" 
                onClick={toggleNav}
                style={({isActive}) => isActive ? activeLinkStyle : null}
                >About Me
                </NavLink>

                <NavLink 
                to="projects" 
                className="link" 
                onClick={toggleNav}
                style={({isActive}) => isActive ? activeLinkStyle : null}
                >Projects
                </NavLink>

                <NavLink 
                to="contact" 
                className="link" 
                onClick={toggleNav}
                style={({isActive}) => isActive ? activeLinkStyle : null}
                >Contact
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
            </div>} 
            
            
        </nav>
    )
}