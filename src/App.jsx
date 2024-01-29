import * as React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LandingPage from "./Pages/LandingPage/index";
import Story from "./Pages/Story/index";
import Vision from "./Pages/Vision/index";
import Team from "./Pages/Team/index";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <LandingPage />,
    },
    {
      path: "/story",
      element: <Story />,
    },
    {
      path: "/vision",
      element: <Vision />,
    },
    {
      path: "/team",
      element: <Team />,
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
