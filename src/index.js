import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// Import pages now. god i fucking hate this. fuck react. but more importantly fuck npm.
import Home from "./Pages/Home";
import Contact from "./Pages/Contact";
import Blog from "./Pages/Blog";
import Firstpost from "./Pages/blog/is-ai-good-for-society";
import Projects from "./Pages/Projects";
import NotFound from "./Pages/404";

const router = createBrowserRouter([
  {
    path: "",
    element: <Home />,
  },
  {
    path: "contact",
    element: <Contact />,
  },
  {
    path: "projects",
    element: <Projects />,
  },
  {
    path: "blog",
    element: <Blog />,
  },
  {
    path: "blog/is-ai-good-for-society",
    element: <Firstpost />,
  },
  {
    path: "*", // Finds 404's
    element: <NotFound />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
