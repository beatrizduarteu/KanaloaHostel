import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Layout from "./layouts/Layout";
import Home from "./pages/Home";
import Community from "./pages/Community";
import Contact from "./pages/contact";
import Accommodation from "./pages/Accommodation";
import Ohana from "./pages/Ohana";
import Nalu from "./pages/Nalu";
import Maluhia from "./pages/Maluhia";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "community",
        element: <Community />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "accommodation",
        element: <Accommodation />,
      },
      {
        path: "Ohana",
        element: <Ohana />,
      },
      {
        path: "Nalu",
        element: <Nalu />,
      },
      {
        path: "Maluhia",
        element: <Maluhia />,
      }
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;