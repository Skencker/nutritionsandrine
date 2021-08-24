import React, { Component } from "react";
import {Switch, Route} from "react-router-dom";

import Navbar from "../../components/UI/NavBar/NavBar";
import Accueil from "./Accueil/Accueil";
import TitreH1 from "../../components/UI/Titres/titreH1";
import Footer from "../../components/UI/Footer/Footer";
import Recettes from "./Recettes/Recettes";


class Site extends Component {
    render() {
        return (
            <>
                <Navbar/>
                {/* <TitreH1></TitreH1> */}
                <Footer></Footer>
                <Switch>
                    <Route path="/conseils" render={()=> <h1>Page de conseils</h1>} />
                    <Route path="/recettes" render={()=> <Recettes/>} />
                    <Route path="/connexion" render={()=> <h1>Page de connexion</h1>} />
                    <Route path="/" render={()=> <Accueil />} />
                </Switch>
            </>
        );
    };

};

export default Site;