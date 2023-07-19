import Logos from "./Logos";
import avatar from "../Images/avatar.png";
import { getProjects } from "../api";
import { useLoaderData, Link } from "react-router-dom";

export function loader() {
    const data = getProjects()
    return data
}

export default function Main(props) {

    const cardArray = useLoaderData();

    const projects = cardArray.map(project => {

        return (
            <Link 
            to={ `projects/${project.id}` }
            className="card" 
            >
                <img 
                    className="project-image" 
                    src={project.img} 
                    alt="project frontpage"
                />
                <i className={ `fa-solid ${ !props.broken ? project.icon : "fa-triangle-exclamation highlight" }`}></i>
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
                        <p>
                        Welcome to my portfolio!
                        <br/>
                        I'm Caleb, a dedicated front-end developer with a passion for crafting dynamic web experiences using <span className="highlight">React</span>.
                        <br/>
                        With a strong foundation in <span className="highlight">HTML</span>, <span className="highlight">CSS</span>, and <span className="highlight">Javascript</span>, I strive to create clean and intuitive user interfaces that blend creativity and functionality.
                        <br/>
                        Whether it's building <span className="highlight">responsive websites</span> or optimizing performance, I'm driven by a constant desire to learn and improve.
                        <br/>
                        Let's collaborate and bring your ideas to life!
                        </p>
                        <br/>
                        <div className="intro-links">
                            <Link to="/contact" className="scroller">
                                Contact 
                                {" "}
                                <i className="fa-solid fa-arrow-right-long"></i>
                            </Link>
                            <br/>
                            <a href="#projects" className="scroller">
                                Projects 
                                {" "}
                                <i className="fa-solid fa-arrow-down-long"></i>
                            </a>
                        </div> 
                    </div>
                    <img src={ avatar } className="profile-pic" alt="" />
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