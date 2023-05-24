import "./Projects.css";
import Project from "../Project/Project";

export default function Projects() {
	const projects_data = [
		{
			title: "Test Project 1",
      date: '4/20/1969',
      link: 'https://google.com',
			desc: "This is a test project that I will use to demonstrate how a project component will look.",
      img: 'https://thumbs.dreamstime.com/b/generic-person-gray-photo-placeholder-man-silhouette-white-background-144511705.jpg'
		},
		{
			title: "Test Project 2",
      date: '4/20/1969',
      link: 'https://google.com',
			desc: "Another fake one.",
      img: 'https://thumbs.dreamstime.com/b/generic-person-gray-photo-placeholder-man-silhouette-white-background-144511705.jpg'
		},
	];

	return (
		<div className="projects">
			{projects_data.map((data) => (
				<Project {...data} />
			))}
		</div>
	);
}
