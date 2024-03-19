import "../styling/Project.css";

function Projects(props: any) {
  return (
    <div className="card">
      <img src={props.imgurl} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text">{props.description}</p>
        <a href={props.btnLink} className="btn btn-primary">
          Check it out
        </a>
      </div>
    </div>
  );
}

export default Projects;
