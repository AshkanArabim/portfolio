import {Link} from "react-router-dom"
import './Nav.css'

export default function Nav() {
	return(
    <header>
      <Link to="/home">Home</Link>
      <Link to="/Projects">Projects</Link>
    </header>
  )
}
