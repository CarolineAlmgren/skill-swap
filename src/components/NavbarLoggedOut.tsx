import { Link } from "react-router-dom";

export const NavbarLoggedOut = () => (
  <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <div className="container-fluid">
      <Link to="/" className="navbar-brand">
        SkillSwap
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ms-auto">
          <li className="nav-item">
            <Link to="/" className="nav-link">
              Logga in
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/createaccount" className="nav-link">
              Skapa konto
            </Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
);
