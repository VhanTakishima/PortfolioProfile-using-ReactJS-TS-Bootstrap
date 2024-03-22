import "../styling/Project.css";
import { useState } from "react";

type Project = {
  key: number;
  id: number;
  title: string;
  imgurl: string;
  description: string;
  btnLink: string;
};

type ProjectsProps = {
  projects: Project[];
  toggleCalculathorVisibility: () => void; // Add this line
};

let Projects;

export default Projects = ({
  projects,
  toggleCalculathorVisibility,
}: ProjectsProps) => {
  const [isCalculathorVisible, setIsCalculathorVisible] = useState(true);

  return (
    <div>
      {projects.map((project) => (
        <div
          key={project.key}
          className={`carousel-item ${project.key === 0 ? " active" : ""}`}
        >
          <img src={project.imgurl} className="d-block img-fluid" alt="..." />
          <div className="carousel-caption d-none d-md-block cstm-bckgrnd">
            <h5 className="">{project.title}</h5>
            <p className="">{project.description}</p>
            <a
              href={project.btnLink}
              className="btn btn-primary"
              role="button"
              onClick={toggleCalculathorVisibility}
            >
              Check it out
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};
