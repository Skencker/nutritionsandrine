import React from "react";
import './navbar.css';
import { NavLink } from "react-router-dom";

const navbar = (props) =>(

    <>
         <nav className="navbar navbar-expand-lg navbar-light bg-light d-flex- justify-content-between">
            <a className="navbar-brand" href="/">
            <NavLink to="/" exact className="navbar-brand fs-1 ms-5 logo">NUTRITION</NavLink>
            </a>
            <button className="navbar-toggler me-5" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarColor01">
                <ul className="navbar-nav ms-auto">
                    <li className="nav-item fs-4">
                        <NavLink to="/" exact className="nav-link">Accueil</NavLink>
                    </li>
                    <li className="nav-item fs-4">
                        <NavLink to="/conseils" exact className="nav-link">Conseils diététique</NavLink>
                    </li>
                    <li className="nav-item fs-4">
                        <NavLink to="/recettes" exact className="nav-link">Recettes</NavLink> 
                    </li>
                </ul>
                <NavLink to="/connexion" exact className="nav-link"><i class="bi bi-person-fill fs-1 btn-danger me-2 rounded"></i></NavLink>
            </div>
        </nav>
    </>

);

export default navbar;
