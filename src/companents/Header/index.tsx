import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
import { AppBar } from "@mui/material";

export default function Header() {
  return (
    <header>
      <AppBar>
        <ul className="nav__list">
          <li className="nav__list-item">
            <Link className="link" to="/">
              Home
            </Link>
          </li>
          <li className="nav__list-item">
            <Link className="link" to="/about">
              About
            </Link>
          </li>
          <li className="nav__list-item">
            <Link className="link" to="/contact">
              Contaxt
            </Link>
          </li>
          <li className="nav__list-item">
            <Link className="link" to="/product">
              Product
            </Link>
          </li>
        </ul>
      </AppBar>
    </header>
  );
}
