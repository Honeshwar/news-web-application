import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <a class="navbar-brand" href="/">
          <img
            src="https://getbootstrap.com/docs/5.0/assets/brand/bootstrap-logo.svg"
            alt=""
            width="30"
            height="24"
            class="d-inline-block align-text-top"
          />
          Bootstrap
        </a>
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
            {false ? (
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

          {false ? (
            <button className="btn btn-outline-danger" type="submit">
              Log out
            </button>
          ) : (
            <>
              <button
                className="btn btn-primary"
                type="submit"
                style={{ marginRight: "10px" }}
              >
                Login
              </button>
              <button className="btn btn-warning" type="submit">
                Register
              </button>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}
