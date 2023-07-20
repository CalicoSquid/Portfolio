import Logos from "./Logos";
import avatar from "../Images/avatar.png";
import { getProjects } from "../api";
import { useLoaderData, Link } from "react-router-dom";
import {react, css, html, js, scss, git, node, psql, jquery, python, d3, mongodb, redux, nextjs, angular} from "../Images/Icons/icons"

export function loader() {
    const data = getProjects()
    return data
}

export default function Main(props) {

    const cardArray = useLoaderData();
    const styles = {
        height: "40px"
    }

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
            
            <section className="intro flex column justify-center">
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
                            <Link to="/about" className="scroller">
                                Bio
                                {" "}
                                <i className="fa-solid fa-arrow-right-long"></i>
                            </Link>
                            <br/>
                        
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
            </section>

            <div className="stack"></div>

            <section className="skills flex justify-center">
                <div className="section-container cards skill-section grid">
                    <div className="skill-card flex column">
                        <h2>Current Stack</h2>
                        <ul>
                            <li className="flex"><img src={react} style={styles} /> React</li>
                            
                            <li className="flex"><img src={js} style={styles} /> Javascript</li>
                            <li className="flex"><img src={html} style={styles} /> Html</li>
                            <li className="flex"><img src={css} style={styles} /> CSS</li>
                            <li className="flex"><img src={scss} style={styles} /> SASS</li>
                            <li className="flex"><img src={git} style={styles} /> git</li>
                        </ul>
                    </div>
                    <div className="skill-card flex column">
                        <h2>Working on it</h2>
                        <ul>
                            <li className="flex"> <img src={node} style={styles} /> Node.js</li>
                            <li className="flex"> <img src={psql} style={styles} /> PostgreSQL</li>
                            <li className="flex"> <img src={jquery} style={styles} /> Jquery</li>
                            <li className="flex"> <img src={python} style={styles} /> Python</li>
                            <li className="flex"> <img src={d3} style={styles} /> D3</li>
                            <li className="flex"> <img src={mongodb} style={styles} /> MongoDB</li>
                        </ul>
                    </div>
                    <div className="skill-card flex column">
                        <h2>Next up</h2>
                        <ul>
                            <li className="flex"><img src={redux} style={styles} /> Redux</li>
                            <li className="flex"><img src={nextjs} style={styles} /> Next JS</li>
                            <li className="flex"><img src={angular} style={styles} /> Angular</li>
                        </ul>
                    </div>
                </div>
            </section>

            <div className="stack flip"></div>

            <section className="projects flex column justify-center" id="projects">
                <h1>Projects</h1>
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