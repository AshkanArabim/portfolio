import "./Project.css";

export default function Project(props) {
	function linkProject() {
		// redirects to project page
		window.location.href = props.link;
	}

	return (
		<div className="project" onClick={linkProject}>
			<img src={props.img} alt={props.title + "project pic"} />
			<h3>{props.title}</h3>
			<p>
				{props.desc} <br />
				Click to read more...
			</p>
			{/* <p>{props.date}</p> */}
			{/* <p>{props.link}</p> */}
		</div>
	);
}
