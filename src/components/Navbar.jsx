import React from "react";
import { Link } from "react-router-dom";
import { formatNumber } from "../utils";

const Navbar = () => {
  const total = 25000;
  const token = false;

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <h5>Pizzeria Mamma Mia !</h5>
          {/* Cambio href="#" por Link al home */}
          <Link className="navbar-brand" to="/">
            🍕 Home
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              {token ? (
                <>
                  <li className="nav-item">
                    {/* Cambio href="#" por Link al perfil */}
                    <Link className="nav-link active" to="/profile">
                      🔓 Profile
                    </Link>
                  </li>
                  <li className="nav-item">
                    {/* Cambio href="#" por un botón de Logout, bueno no existe y no es solicitado, se deja como comentario */}
                    <a className="nav-link" href="#">
                      🔒 Logout
                    </a>
                  </li>
                </>
              ) : (
                <>
                  <li className="nav-item">
                    {/* Cambio href="#" por Link al login */}
                    <Link className="nav-link active" to="/login">
                      🔐 Login
                    </Link>
                  </li>
                  <li className="nav-item">
                    {/* Cambio href="#" por Link al registro */}
                    <Link className="nav-link active" to="/register">
                      🔐 Register
                    </Link>
                  </li>
                </>
              )}
            </ul>
          </div>
          {/* Cambio el texto Total por un Link al carrito */}
          <Link className="btn btn-primary" to="/cart">
            🛒 Total: ${formatNumber(total)}
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
