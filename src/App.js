import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
  useNavigate
} from "react-router-dom";
import Navbar from "./components/Navbar";
import { Home, Favorites, Details, Login, Register } from "./pages";
import {isAuthenticated} from "./utils/authServices"

const NotFound = () => {
  return (
    <div>
      <h1>Page Not Found</h1>
    </div>
  );
};

function App() {
  console.log("isAuthenticated",isAuthenticated())
  // create a layout
  const Layout = () => {
    return (
      <>
        <Navbar isUserHaveSessionCookie={isAuthenticated()} />
        <Outlet />
      </>
    );
  };
  //create protected route components
  const ProtectedRoute1 = ({ children }) => {
    const navigate = useNavigate();
    if(!isAuthenticated()){
     return  navigate("/login")
    }
    return children;
  };
  const ProtectedRoute2 = ({ children }) => {
    const navigate = useNavigate();
    if(isAuthenticated()){
      return navigate("/")
    }
    return children;
  };

  //create a router
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: (
            <ProtectedRoute1>
              <Home />
            </ProtectedRoute1>
          ),
        },
        {
          path: "/favorites",
          element: (
            <ProtectedRoute1>
              {" "}
              <Favorites />
            </ProtectedRoute1>
          ),
        },
        {
          path: "/details/:id",
          element: (
            <ProtectedRoute1>
              <Details />
            </ProtectedRoute1>
          ),
        },
        {
          path: "/register",
          element: (
            <ProtectedRoute2>
              <Register />
            </ProtectedRoute2>
          ),
        },
        {
          path: "/login",
          element: (
            <ProtectedRoute2>
              <Login/>
            </ProtectedRoute2>
          ),
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
