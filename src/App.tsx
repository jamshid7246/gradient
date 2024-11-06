import React from "react";
import "./App.css";
import { Button } from "@mui/material";
import DashboardLayoutNavigationLinks from "./companents/Header";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Page404 from "./Pages/Page404";
import Product from "./Pages/Products";
import Header from "./companents/Header";
import { Route, Routes } from "react-router-dom";
import GreenCard from "./Pages/GreenCard";

const routes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/product",
    element: <Product />,
  },
  {
    path: "*",
    element: <Page404 />,
  },
];

function App() {
  return (
    <>
      <Header></Header>
      <Routes>
        {routes.map((router) => {
          return <Route {...router} />;
        })}
      </Routes>
      <GreenCard />
    </>
  );
}

export default App;
