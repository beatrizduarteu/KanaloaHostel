import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Layout from "./layouts/Layout";
import Home from "./pages/Home";
import Community from "./pages/Community";

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
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;