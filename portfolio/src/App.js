import logo from "./logo.svg";
import "./App.css";
import Nav from "./components/Nav/Nav.jsx";
import Footer from "./components/Footer/Footer";
import { Outlet } from "react-router-dom";

function App() {
	return (
		<div className="App">
			<Nav />
			<Outlet />
			<Footer />
		</div>
	);
}

export default App;
