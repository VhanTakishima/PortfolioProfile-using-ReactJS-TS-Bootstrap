import "../styling/Miniproject.css";
import Calculathor from "./Calculathor";
import ToDoList from "./ToDoList";
import MinesMorales from "./Mines";
import { useState } from "react";

type Project = {
  key: number;
  id: number;
  title: string;
  imgurl: string;
  description: string;
  btnLink: string;
};

function Miniproject() {
  const [isCalculathorVisible, setIsCalculathorVisible] = useState(false);
  const [isToDoListVisible, setToDoListVisible] = useState(false);
  const [isMinesVisible, setMinesVisible] = useState(false);
  // const [visibleComponent, setVisibleComponent] =
  //   useState<React.ReactNode | null>(null);

  const projectData = [
    {
      key: 0,
      id: 0,
      title: "Calculathor",
      imgurl: "src/assets/Calcu.jpg",
      description: " Simple calculator mini project",
      btnLink: "#",
    },
    {
      key: 1,
      id: 1,
      title: "Mines Morales",
      imgurl: "src/assets/mines-banner-01.png",
      description:
        " Play Mines(currently WIP) change in Miniprojects when finished ",
      btnLink: "#",
    },
    {
      key: 2,
      id: 2,
      title: "To-do List",
      imgurl: "src/assets/todolist.jpg",
      description: "Simple to do list",
      btnLink: "#",
    },
    {
      key: 3,
      id: 3,
      title: "Calculathor",
      imgurl: "src/assets/Calcu.jpg",
      description: " Simple calculator mini project",
      btnLink: "#",
    },
    {
      key: 4,
      id: 4,
      title: "Ceasar Cipher",
      imgurl: "src/assets/Cipher2.png",
      description: " Encrypt/Decrypt using Ceasar Cipher",
      btnLink: "#",
    },
    {
      key: 5,
      id: 5,
      title: "To-do List",
      imgurl: "src/assets/todolist.jpg",
      description: "Simple to do list",
      btnLink: "#",
    },
  ];
  const toggleCalculathorVisibility = () => {
    setIsCalculathorVisible(!isCalculathorVisible);
    setToDoListVisible(false); // Close ToDoList when opening Calculathor
    setMinesVisible(false);
  };

  const toggleToDoListVisibility = () => {
    setToDoListVisible(!isToDoListVisible);
    setIsCalculathorVisible(false); // Close Calculathor when opening ToDoList
    setMinesVisible(false);
  };

  const toggleMinesVisibility = () => {
    setMinesVisible(!isMinesVisible);
    setIsCalculathorVisible(false);
    setToDoListVisible(false);
  };

  const handleButtonClick = (project: Project) => {
    switch (project.title) {
      case "Calculathor":
        toggleCalculathorVisibility();
        break;
      case "To-do List":
        toggleToDoListVisibility();
        break;
      case "Mines Morales":
        toggleMinesVisibility();
        break;
      default:
        break;
    }
  };

  const carouselIndicators = projectData.map((project) => (
    <button
      key={project.key}
      type="button"
      data-bs-target="#projectsCarousel"
      data-bs-slide-to={project.key}
      className={project.key === 0 ? "active" : ""}
      aria-label={"Slide" + project.key}
    ></button>
  ));

  return (
    <div className="container-fluid">
      <div className="row gx-2 ">
        <div className="col-md-5 align-self-center">
          <div className="row leftColumn">
            <h1>My Mini Projects</h1>
            <h5>Currently WIP</h5>
          </div>
        </div>
        <div className="col-md-1"></div>
        <div className="col-md-6 carousel-area">
          <div
            className="carousel slide"
            id="projectsCarousel"
            data-bs-ride="carousel"
          >
            <div className="carousel-indicators">{carouselIndicators}</div>
            <div className="carousel-inner">
              {projectData.map((project) => (
                <div
                  key={project.key}
                  className={`carousel-item ${
                    project.key === 0 ? " active" : ""
                  }`}
                >
                  <img
                    src={project.imgurl}
                    className="d-block img-fluid"
                    alt="..."
                  />
                  <div className="carousel-caption d-block cstm-bckgrnd">
                    <h5 className="">{project.title}</h5>
                    <p className="">{project.description}</p>
                    <a
                      href={project.btnLink}
                      className="btn btn-primary"
                      role="button"
                      onClick={() => {
                        handleButtonClick(project);
                        console.log(project.title);
                      }}
                    >
                      Check it out
                    </a>
                  </div>
                </div>
              ))}
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#projectsCarousel"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#projectsCarousel"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
        {isCalculathorVisible && (
          <Calculathor
            isVisible={isCalculathorVisible}
            onClose={toggleCalculathorVisibility}
          />
        )}
        {isToDoListVisible && (
          <ToDoList
            isVisible={isToDoListVisible}
            onClose={toggleToDoListVisibility}
          />
        )}
        {isMinesVisible && (
          <MinesMorales
            isVisible={isMinesVisible}
            onClose={toggleMinesVisibility}
          />
        )}
      </div>
      {/* carousel ends here */}
    </div>
  );
}

export default Miniproject;
