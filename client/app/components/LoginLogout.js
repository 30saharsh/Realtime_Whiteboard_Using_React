"use client";
import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const LoginLogout = () => {
  const { user, isAuthenticated } = useAuth0();
  const { loginWithRedirect } = useAuth0();
  const { logout } = useAuth0();
  return (
    <div>
      <div>
        {isAuthenticated ? (
          <div>
            <nav className="navbar navbar-expand-lg custom-navbar-bg ">
              <div className="container-fluid">
                <a className="navbar-brand" href="#">
                  {" "}
                  {user.email}{" "}
                </a>
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
                  <ul className="navbar-nav">
                    <li className="nav-item">
                      <a
                        className="nav-link active"
                        aria-current="page"
                        href="#"
                      >
                        {" "}
                        <button
                          onClick={() =>
                            logout({
                              logoutParams: {
                                returnTo: window.location.origin,
                              },
                            })
                          }
                        >
                          Log Out
                        </button>
                      </a>
                    </li>
                    <h2>Let's Draw Your Imagination</h2>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        ) : (
          <div>
            <nav className="navbar navbar-expand-lg custom-navbar-bg ">
              <div className="container-fluid">
                <a className="navbar-brand" href="#"></a>
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
                  <ul className="navbar-nav">
                    <li className="nav-item">
                      <a
                        className="nav-link active"
                        aria-current="page"
                        href="#"
                      >
                        {" "}
                        <button onClick={() => loginWithRedirect()}>
                          Log In / Sign Up
                        </button>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">
                        About
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">
                        Features
                      </a>
                    </li>
                    <h2>Let's Draw Your Imagination</h2>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        )}
      </div>
    </div>
  );
};

export default LoginLogout;
