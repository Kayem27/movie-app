import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/components/navigation.css";

const Navigation = () => {
  return (
    <nav className="navigation">
      <ul >
        <NavLink to={"/"}>
            <li>Acceuil</li>
        </NavLink>
        <NavLink to={"/favoris"}>
            <li>Coup de coeur</li>
        </NavLink>
      </ul>
    </nav>
  );
};

export default Navigation;
