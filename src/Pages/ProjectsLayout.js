import { Outlet, NavLink, useLoaderData } from "react-router-dom";
import { getProjects } from "../Utils/api";
import MobileNav from "../Components/MobileProjectNav";
import Error from "../Components/Error";
import { useEffect } from "react";

export function loader() {
    const data = getProjects()
    return data
}

export default function ProjectLayout({isMobile, closeNav}) {
    const data = useLoaderData();

    useEffect(() => {
        closeNav()
    }, [])

    const projectData = data.error ? [] : data
    const colorArray = ["yellow", "yellow", "red", "blue"];

    const activeHostLinkStyle = {
        borderTop: `10px solid transparent`,
        boxShadow: "rgba(226, 228, 230, 0.3) 0px 1px 2px 0px, rgba(226, 228, 230, 0.3) 0px 1px 3px 1px;"
    }

    const navLinks = projectData.map((project, i) => {

        return (
                <NavLink 
                key={project.id}
                className="project-link"
                to={project.id} 
                end 
                style={({isActive}) => isActive ? activeHostLinkStyle : null}
                > 
                    <div className={`card2 flex column justify-space-between bg-hover-${colorArray[i]}-dark-1 ${colorArray[i]}`}>
                    <i className={ `fa-solid ${project.icon}`}></i>
                    <h2>{project.name}</h2>
                    </div>
                          
                </NavLink>
        )
    }).reverse()
    let first = navLinks.splice(2, 1)[0]; 
    navLinks.unshift(first)

    return (
        <div className="project-page">
            {!isMobile ?
            <nav className="project-nav flex justify-center">       
                {navLinks}    
            </nav>    
            
            :

            <MobileNav 
            projectData={projectData}  
            />}

            {data.error ? <Error error={data.error}/> : <Outlet/>}
        </div>
    )
}