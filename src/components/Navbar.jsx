import { Link } from "react-router-dom";
import { logout } from "../utils/authServices";

export default function Navbar({ isUserHaveSessionCookie }) {
  console.log("isUserHaveSessionCookie", isUserHaveSessionCookie);

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVbOv-GM-P2Leun5S_6scfxcU7t3yjOT68Cg&usqp=CAU"
            alt="brand Logo"
            width="30"
            height="24"
            className="d-inline-block align-text-top"
          />
          News App
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="/navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            {isUserHaveSessionCookie ? (
              <>
                <li className="nav-item">
                  <Link className="nav-link" aria-current="page" to={"/"}>
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link "
                    aria-current="page"
                    to={"/favorites"}
                  >
                    Favorites
                  </Link>
                </li>
              </>
            ) : null}
          </ul>

          {isUserHaveSessionCookie ? (
            <button
              className="btn btn-outline-danger"
              type="submit"
              onClick={logout}
            >
              Log out
            </button>
          ) : (
            <>
              <Link className="btn btn-outline-primary me-2" to={"/login"}>
                Login
              </Link>
              <Link className="btn btn-outline-secondary" to={"/register"}>
                Register
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}
