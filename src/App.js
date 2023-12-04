import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Navbar from "./components/Navbar";
import { Home, Favorites, Login, Register } from "./pages";

const NotFound = () => {
  return (
    <div>
      <h1>Page Not Found</h1>
    </div>
  );
};
const Details = () => {
  return (
    <div>
      <h1>Details</h1>
    </div>
  );
};

function App() {
  // create a layout
  const Layout = () => {
    return (
      <>
        <Navbar />
        <Outlet />
      </>
    );
  };

  //create a router
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/favorites",
          element: <Favorites />,
        },
        {
          path: "/details/:id",
          element: <Details />,
        },
        {
          path: "/register",
          element: <Register />,
        },
        {
          path: "/login",
          element: <Login />,
        },
      ],
    },
    {
      path: "*",
      element: <NotFound />,
    },
  ]);

  //return the router
  return <RouterProvider router={router} />;
}

export default App;
