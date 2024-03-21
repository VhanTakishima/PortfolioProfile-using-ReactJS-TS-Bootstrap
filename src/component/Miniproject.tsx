import Projects from "./Projects";
import "../styling/Miniproject.css";
function Miniproject() {
  // const responsive = {
  //   desktop: {
  //     breakpoint: { max: 3000, min: 800 },
  //     items: 3,
  //     slidesToSlide: 1, // optional, default to 1.
  //   },
  //   tablet: {
  //     breakpoint: { max: 800, min: 464 },
  //     items: 2,
  //     slidesToSlide: 2, // optional, default to 1.
  //   },
  //   mobile: {
  //     breakpoint: { max: 464, min: 0 },
  //     items: 1,
  //     slidesToSlide: 1, // optional, default to 1.
  //   },
  // };

  //add cards here -- might automate in the  future
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
      title: "Ceasar Cipher",
      imgurl: "src/assets/Cipher2.png",
      description: " Encrypt/Decrypt using Ceasar Cipher",
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
          <div className="row leftColumn text-end">
            <h1>My Mini Projects</h1>
            <h5>Currently WIP</h5>
          </div>
        </div>
        <div className="col-md-1"></div>
        <div className="col-md-6">
          <div
            className="carousel slide"
            id="projectsCarousel"
            data-bs-ride="carousel"
          >
            <div className="carousel-indicators">{carouselIndicators}</div>
            <div className="carousel-inner">
              <Projects projects={projectData} />
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
        {/* <div className="col-2"></div> */}
      </div>
      {/* carousel ends here */}
    </div>
  );
}
export default Miniproject;
