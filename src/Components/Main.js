import Logos from "./Logos"
import avatar from "../Images/avatar.png"
import { getProjects } from "../api"
import { useLoaderData, Link } from "react-router-dom"

export function loader() {
    const data = getProjects()
    return data
}

export default function Main(props) {

    const cardArray = useLoaderData();

    const projects = cardArray.map(project => {
        const icon = 
        project.type === "Game" ?
        "fa-gamepad" :
        project.type === "Webapp" ?
        "fa-code" :
        "fa-earth-americas"

        return (
            <Link 
            to={`projects/${project.id}`}
            className="card" 
            >
                <img 
                    className="project-image" 
                    src={project.img} 
                    alt="project frontpage"
                />
                <i className={ `fa-solid ${!props.broken ? icon : "fa-triangle-exclamation broken front"}`}></i>
            </Link>
        )
    })

    return (
        <div className="main flex column justify-space-around">
            <section className="intro flex column justify-space-around">
                <div className="section-container main-info flex justify-center">
                    <div className="info-text">
                        <h1>Caleb Mow</h1>
                        <h3>Front End Developer</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In, nemo corrupti aspernatur ullam quam explicabo doloribus deleniti adipisci cupiditate!</p>
                        <br/>
                        <div className="intro-links">
                            <Link to="/contact" className="scroller">
                                Contact 
                                {" "}
                                <i class="fa-solid fa-arrow-right-long"></i>
                            </Link>
                            <br/>
                            <a href="#projects" className="scroller">
                                Projects 
                                {" "}
                                <i class="fa-solid fa-arrow-down-long"></i>
                            </a>
                        </div> 
                    </div>
                    <img src={avatar} className="profile-pic" alt="profile picture" />
                </div>
                
                <div className="stack flex justify-center">
                    <div className="flex">
                        <p>Html</p>
                        <p>Javascript</p>
                        <p>Css</p>
                    </div>
                    <div className="flex">
                        <p>React</p>
                        <p>Sass</p>
                        <p>Git</p>
                    </div>
                </div>
            </section>


            <section className="projects flex column justify-center" id="projects">
                <h1>&lt;Projects/&gt;</h1>
                <div className="section-container cards grid">
                    {projects}
                </div>
            </section>

            <section className="contact">
                <div className="section-container flex column">  
                    <Logos />
                </div>
            </section>
        </div>
    )
}