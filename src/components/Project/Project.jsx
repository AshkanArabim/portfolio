// google drive direct link: (to use in database file)
// https://stackoverflow.com/questions/10311092/displaying-files-e-g-images-stored-in-google-drive-on-a-website

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
		</div>
	);
}
