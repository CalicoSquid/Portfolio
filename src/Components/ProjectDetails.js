
import { useLoaderData, defer, Await } from "react-router-dom";
import { Suspense } from "react";
import { getProject } from "../api"
import Loading from "./Loading";
import { useSwipeable } from "react-swipeable";


export function loader({ params }) {
    const { id } = params
    const data = getProject(id)
    return defer({data})
  }


export default function ProjectDetails(props) {

        const projectPromise = useLoaderData();

        const handlers = useSwipeable({
            onSwiped: (eventData) => console.log("User Swiped!", eventData),
            //...config,
          });

        const renderProject = (project) => {
            const langs = project.language.map(lang => <div className="languages">{lang}</div>);

                            return (
                                <div className="project-page justify-center flex">
                                    <div className="project-container flex justify-center">
                                        <div className="project-text flex column justify-space-between">
                                                <div>
                                                    <h1>{project.name}</h1>                  
                                                    <h4><i className={`fa-solid ${project.icon}`}></i> {project.type}</h4>
                                                    <br/>
                                                    <p>{project.description}</p>
                                                    <br/>
                                                    <i className="fa-solid fa-link"></i>
                                                    <a 
                                                        href={project.url} 
                                                        target="_blank" 
                                                        rel="noreferrer"
                                                    > 
                                                    {" Live Demo"}
                                                    </a>
                                                    <i className="fa-brands fa-github"></i>
                                                    <a 
                                                        href={project.github} 
                                                        target="_blank" 
                                                        rel="noreferrer"
                                                    > 
                                                    {" Source Code"}
                                                    </a>      
                                                </div>
                                                <div className="lang-box flex">{langs}</div>
                                            </div>
                                            

                                            <img 
                                            className="project-image" 
                                            src={project.header} 
                                            alt="project frontpage"
                                            />
                                        </div>
                                    </div>
    )}

    return (

        <Suspense fallback={<Loading />}>
                <Await resolve={projectPromise.data}>
                    {!props.broken ? renderProject : () => {throw ({message: "You broke everything!", status: 400, statusText: "Bad Request Error"})}}
                </Await>
            </Suspense>     
        
        
          
        

        
    )
}
