import Projects from "./Projects";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

function Mmp() {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 800 },
      items: 3,
      slidesToSlide: 1, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 800, min: 464 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

  //add cards here -- might automate in the  future
  const projectData = [
    {
      id: 1,
      title: "Calculathor",
      imgurl: "src/assets/Calcu.jpg",
      description: " Simple calculator mini project",
      btnLink: "#",
    },
    {
      id: 2,
      title: "Ceasar Cipher",
      imgurl: "src/assets/Cipher.png",
      description: " Encrypt/Decrypt using Ceasar Cipher",
      btnLink: "#",
    },
    {
      id: 3,
      title: "To-do List",
      imgurl: "src/assets/todolist.jpg",
      description: "Simple to do list",
      btnLink: "#",
    },
    {
      id: 4,
      title: "Calculathor",
      imgurl: "src/assets/Calcu.jpg",
      description: " Simple calculator mini project",
      btnLink: "#",
    },
    {
      id: 5,
      title: "Ceasar Cipher",
      imgurl: "src/assets/Cipher.png",
      description: " Encrypt/Decrypt using Ceasar Cipher",
      btnLink: "#",
    },
    {
      id: 6,
      title: "To-do List",
      imgurl: "src/assets/todolist.jpg",
      description: "Simple to do list",
      btnLink: "#",
    },
  ];

  const project = projectData.map((item) => (
    <Projects
      title={item.title}
      imgurl={item.imgurl}
      description={item.description}
      btnLink={item.btnLink}
    />
  ));
  return (
    <div>
      <h1>My Mini Projects</h1>
      <h5>(currently WIP)</h5>
      <Carousel
        swipeable={false}
        draggable={false}
        showDots={true}
        responsive={responsive}
        ssr={true} // means to render carousel on server-side.
        infinite={true}
        autoPlaySpeed={1000}
        keyBoardControl={true}
        customTransition="all .5"
        transitionDuration={500}
        removeArrowOnDeviceType={["tablet", "mobile"]}
        dotListClass="custom-dot-list-style"
      >
        {project}
      </Carousel>
    </div>
  );
}

export default Mmp;
