import React from "react";
import { Link } from "react-router-dom";
import axiosInstance, { SetAccessToken } from "../axiosInstance";

function Menu({ user, setUser }) {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <Link to="/">За Ваше здоровье!</Link>
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
            {!user ? (
              <>
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">
                    <Link to="/signup">Регистрация</Link>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    <Link to="/signin">Вход</Link>
                  </a>
                </li>
              </>
            ) : (
              <>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    <Link to="/basket">Корзина</Link>
                  </a>
                </li>
                <li className="nav-item">
                  <button
                    className="nav-link"
                    onClick={async () => {
                    await axiosInstance.get("/auth/logout");
                    setUser(null);
                    SetAccessToken("");
                    }}
                  >
                    Logout
                  </button>
                </li>
              </>
            )}
          </ul>
        </div>
        {user && <div>Добро пожаловать, {user.name}</div>}
      </div>
    </nav>
  );
}

export default Menu;
