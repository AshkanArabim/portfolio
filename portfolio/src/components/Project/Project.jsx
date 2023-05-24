import "./Project.css"

export default function Project(props) {
	return (
		<div className="project">
			<h3>{props.title}</h3>
			<p>{props.desc}</p>
      <p>{props.date}</p>
      <p>{props.link}</p>
      <img src={props.img} alt="Project image" />
		</div>
	);
}
