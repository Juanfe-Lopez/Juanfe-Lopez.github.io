import "./Navbar.css";
import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { user, isAuthenticated, loginWithRedirect, logout } = useAuth0();

  return (
    <>
      <header>
        <div className="brand">
          <Link to="/BlogList">Kino</Link>
        </div>
        <div>
          <Link to="/Favs">Favs</Link>
        </div>
        <div>
          <Link to="/MustWatch">Must Watch</Link>
        </div>
        <div>
          <Link to="/">Login/Logout</Link>
        </div>
        <div>
          <Link to="/Dashboard">Dashboard</Link>
        </div>
        <div>
          {isAuthenticated ? (
            <button
              onClick={() => {
                logout();
              }}
            >
              Logout
            </button>
          ) : (
            <button
              onClick={() => {
                loginWithRedirect();
              }}
            >
              Login
            </button>
          )}
        </div>
      </header>
    </>
  );
};

export default Navbar;
