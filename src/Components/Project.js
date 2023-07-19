import projects from "../Images/projects.png"

export default function Project(props) {

    return (
        <div className="project-page justify-center flex">
            <div className="project-container flex justify-center">
                <div className="project-text flex column justify-space-between">
                    <h1>My Projects</h1>                  
                    <br/>
                    <p>My first stab at using React-Router. This single page mock van rental site uses React and Javascript and provided valuable knowledge of loaders, error handling and API calls, as well as sharpening my design skills using CSS.</p>
                    <br/>
                    <button 
                    onClick={props.breakEverything} 
                    className={`break-everything ${!props.broken ? "broken-bg" : "fix"}`}
                    >
                        {
                        !props.broken ? 
                        <p className="error-button highlight"><i class="fa-solid fa-triangle-exclamation highlight"></i> Break Everything</p> :
                        <p className="error-button"><i className="fa-solid fa-wrench"></i> Fix everything</p>
                        }
                    </button>
                </div>
            
                <img 
                className="project-image" 
                src={projects} 
                alt="project frontpage"
                />
            </div>
        
        </div>
        
    )
}
