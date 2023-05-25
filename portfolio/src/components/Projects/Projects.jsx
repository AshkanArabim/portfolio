import "./Projects.css";
import Project from "../Project/Project";
import data from "../../data/data.json"

export default function Projects() {
	return (
		<div className="projects">
			{data.projects.map((data) => (
				<Project {...data} />
			))}
		</div>
	);
}
