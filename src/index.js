import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
// Import pages now. god i fucking hate this. fuck react. but more importantly fuck npm.
import Home from './Pages/Home';
import Contact from './Pages/Contact';
import Blog from './Pages/Blog';
import Projects from './Pages/Projects';
import NotFound from './Pages/404';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "",
    element: < Home />,
  },
  {
    path: "contact",
    element: < Contact />,
  },
  {
    
    path: "projects",
    element: < Projects />,
  },
  // Shelved until futher notice
  //{
  //  path: "blog",
  //  element: < Blog />,
  //},
  {
    path: "*", // Finds 404's
    element: < NotFound />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
