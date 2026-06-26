import { Link } from "react-router-dom";
import "bootstrap-icons/font/bootstrap-icons.css";

function Navbar() {
  return (
    <nav
      className="navbar navbar-expand-lg shadow-lg"
      style={{ backgroundColor: "#8b5cf6" }}
    >
      <div className="container">
        {/* Marca */}
        <Link className="navbar-brand fw-bold text-light" to="/">
          <i className="bi bi-journal-bookmark-fill me-2"></i>
          Notebook Matemática
          <i className="bi bi-mortarboard-fill ms-2"></i>
        </Link>

        {/* Links */}
        <div className="navbar-nav ms-auto">
          <Link className="nav-link text-light" to="/">
            <i className="bi bi-house-door-fill me-1"></i>Inicio
          </Link>
          <Link className="nav-link text-light" to="/tema1">
            <i className="bi bi-1-circle-fill me-1"></i>Tema
          </Link>
          <Link className="nav-link text-light" to="/tema2">
            <i className="bi bi-2-circle-fill me-1"></i>Tema
          </Link>
          <Link className="nav-link text-light" to="/tema3">
            <i className="bi bi-3-circle-fill me-1"></i>Tema
          </Link>
          <Link className="nav-link text-light" to="/tema4">
            <i className="bi bi-4-circle-fill me-1"></i>Tema
          </Link>
          <Link className="nav-link text-light" to="/tema5">
            <i className="bi bi-5-circle-fill me-1"></i>Tema
          </Link>
          <Link className="nav-link text-light" to="/tema6">
            <i className="bi bi-6-circle-fill me-1"></i>Tema
          </Link>
          <Link className="nav-link text-light" to="/repartidos">
            <i className="bi bi-filetype-pdf"></i>Repartidos
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
