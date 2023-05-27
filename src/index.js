import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, Navigate, createHashRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import RouterError from "./components/RouterError/RouterError";
import reportWebVitals from "./reportWebVitals";
import Projects from "./components/Projects/Projects";
import Hero from "./components/Hero/Hero";

const router = createHashRouter([
  {
    path: "",
    element: <App />,
    children: [
      {
        path: "",
        element: <Navigate to="/home" />,
      },
      {
        path: "home",
        element: <Hero />
      },
      {
        path: "projects",
        element: <Projects />
      }
    ]
  },
  {
    path: "*",
    element: <RouterError />
  }
])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<RouterProvider router = {router}/>
	</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
