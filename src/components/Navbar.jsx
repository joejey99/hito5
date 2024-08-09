import React from "react";
import { formatNumber } from "../utils";

const Navbar = () => {
  const total = 25000;
  const token = false;

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <h5>Pizzeria Mamma Mia !</h5>
          <a className="navbar-brand" href="#">
            🍕 Home
          </a>
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
                    <a className="nav-link active" aria-current="page" href="#">
                      🔓 Profile
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      🔒 Logout
                    </a>
                  </li>
                </>
              ) : (
                <>
                  <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#">
                      🔐 Login
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#">
                      🔐 Register
                    </a>
                  </li>
                </>
              )}
            </ul>
          </div>
          Total: $ {formatNumber(total)}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
