import  { useState, Suspense } from "react";
import { useLoaderData, defer, Await } from "react-router-dom";
import { getProject } from "../Utils/api";

import Loading from "./Loading";
import database from "../Images/database.png";
import { CircularProgress } from "@mui/material";

export function loader({ params }) {
  const { id } = params;
  const data = getProject(id);
  return defer({ data });
}

export default function ProjectDetails() {
  const projectPromise = useLoaderData();
  const [imageLoaded, setImageLoaded] = useState(false);

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  const renderProject = (project) => {
    const langs = project.language.map((lang, i) => (
      <div className="languages" key={i}>
        {lang}
      </div>
    ));

    return (
      <div className="project-page justify-center flex">
        <div className="project-wrapper">
        <div className={`project-container justify-center flex`}>
          <div className="project-text flex column justify-space-between">
            <div>
              <h1>{project.name}</h1>
              <h4 className="highlight">
                <i className={`fa-solid ${project.icon}`}></i> {project.type}
              </h4>
              <br />
              <p>{project.description}</p>
              <br />
              <i className="fa-solid fa-link"></i>
              <a href={project.url} target="_blank" rel="noreferrer">
                {" Live Demo"}
              </a>
              <i className="fa-brands fa-github"></i>
              <a href={project.github} target="_blank" rel="noreferrer">
                {" Source Code"}
              </a>
            </div>
            <div className="lang-box flex">{langs}</div>
            {project.database && <div className="database flex languages"><img style={{height: "20px"}}src={database} alt="database" />{project.database}</div>}
          </div>

          <img
            className="project-image"
            src={project.header}
            alt={project.name}
            onLoad={handleImageLoad} // Add the onLoad event handler here
          />
          {!imageLoaded && <CircularProgress color="secondary" />}
        </div>
        </div>
      </div>
    );
  };

  return (
    <Suspense fallback={<Loading />}>
      <Await resolve={projectPromise.data}>{renderProject}</Await>
    </Suspense>
  );
}
