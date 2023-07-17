import { Outlet, NavLink, useLoaderData } from "react-router-dom";
import { getProjects } from "../api";
import projects from "../Images/projects.png"
import MobileNav from "./MobileProjectNav";

export function loader() {
    const data = getProjects()
    return data
}

export default function ProjectLayout(props) {

    const projectData = useLoaderData()

    const activeHostLinkStyle = {
        borderTop: `10px solid transparent`
    }


    const navLinks = projectData.map(project => {

        const icon = 
        project.type === "Game" ?
        "fa-gamepad" :
        project.type === "Webapp" ?
        "fa-code" :
        "fa-earth-americas"

        return (
                <NavLink 
                key={project.id}
                className="project-link"
                to={project.id} 
                end 
                style={({isActive}) => isActive ? activeHostLinkStyle : null}
                > 
                    <img className="thumbnail" src={project.img} alt="" />   
                    <p> <i className={ `fa-solid ${!props.broken ? icon : "fa-triangle-exclamation broken"}`}></i> {project.name}</p>          
                </NavLink>
        )
    })

    const homeLink = <NavLink 
                    to={"/projects"} 
                    end 
                    className="project-link"
                    style={({isActive}) => isActive ? activeHostLinkStyle : null}> 
                        <img className="thumbnail" src={projects} alt=""/>                  
                        <p>Home</p>
                    </NavLink>


    return (
        <div className="project-page">
            {!props.isMobile ?
            <nav className="project-nav flex justify-center">       
                {homeLink}
                {navLinks}    
            </nav>    :

            <MobileNav projectData={projectData} image={projects} home={homeLink}/>}

            <Outlet />
        </div>
    )
}