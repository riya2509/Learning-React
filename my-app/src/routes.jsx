import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import City from "./components/City";
import Contact from "./components/Contact";
import Todo from "./components/Todo";
function Routes() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Todo />,
    },
    {
      path: "/contact",
      element: <Contact />,
    },
    {
      path: "/city",
      element: <City />,
    },
  ]);
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default Routes;
