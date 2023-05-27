import { useRouteError } from "react-router-dom"
import './RouterError.css'

export default function RouterError() {
  const error = useRouteError();
  console.log(error)

  return (
    <div id="error-page">
      <h1>Page doesn't exist!</h1>
    </div>
  )
}