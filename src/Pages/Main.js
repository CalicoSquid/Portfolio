import Logos from "../Components/Logos";
import avatar from "../Images/avatar.png";
import { getProjects } from "../Utils/api";
import { useLoaderData, Link } from "react-router-dom";
import Canvas from "../Components/Canvas"
import SkillColumn from "../Components/SkillColumn";
import Error from "../Components/Error";
import { currentStackSkills, workingOnItSkills, nextUpSkills } from "../Utils/skills"

export function loader() {
    const data = getProjects()
    return data
}

export default function Main({broken}) {
    const data = useLoaderData()
    const cardArray = data.error ? [] : data; 
    const colorArray = ["yellow", "yellow", "red", "blue"];

    const projects = cardArray.map((project, i) => {
        return (
            <Link 
            to={ `projects/${project.id}` }
            className={`card2 flex column justify-space-between bg-hover-${colorArray[i]}-dark-1 ${colorArray[i]}`}
            >
                <i className={ `fa-solid ${ !broken ? project.icon : "fa-triangle-exclamation highlight" }`}></i>
                <h2>{project.name}</h2>
                <p>{project.description}</p>
                <div className="lang flex">{project.language.map(x => <p>{x}</p>)}</div>
            </Link>
        )
    }).reverse()

    let first = projects.splice(2, 1)[0]; 
    projects.unshift(first)
    

    return (
        <div className="main flex column justify-space-around">
            
            <section className="intro flex column justify-center" id="intro">
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

                    <Canvas />
                    
                    <img src={ avatar } className="profile-pic" alt="" />
                    
                </div>
            </section>

            <div className="stack"></div>

            <section className="skills flex column justify-center">
                <h1>
                    <a href="#intro">
                        <i className="fa-solid fa-arrow-up-long highlight back-to-top"></i>
                    </a>
                    {" "}
                    Skills</h1>
                <div className="section-container cards skill-section grid">
                    <SkillColumn title="Current Stack" skills={currentStackSkills} />
                    <SkillColumn title="Working on it" skills={workingOnItSkills} />
                    <SkillColumn title="Next up..." skills={nextUpSkills} />
                </div>
            </section>

            <div className="stack flip"></div>

            <section className="projects flex column justify-center" id="projects">
                <h1>
                    <a href="#intro">
                        <i className="fa-solid fa-arrow-up-long highlight back-to-top"></i>
                    </a>  
                    {" "}
                    Projects
                </h1>
                {cardArray.length > 0 ? <div className="section-container cards grid">
                    {projects} 
                </div> : <Error error={data.error}/>} 
            </section>

            <Logos />

        </div>
    )
}