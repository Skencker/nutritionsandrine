import React, { Component } from "react";
import axios from "axios";
import Recette from "./Recette/Recette";
import Button from "../../../components/UI/buttons/button";

class Recettes extends Component {
    state = {
        recettes : null,
        filtreRecette : null,
    }

    loadData = () => {
        let categorie = this.state.filtreRecette ? this.state.filtreRecette : "-1";
        axios.get(`http://localhost/site-nutri-serveur/front/recettes/${categorie}`)
        .then(reponse => {
            this.setState({recettes:Object.values(reponse.data)})
        })
    }

    componentDidMount = () => {
        this.loadData();
    }

    componentDidUpdate = () => {
        this.loadData();
    }

    handleSelectionCategorie = (idCategorie) => {
        console.log(`demande de ${idCategorie}`);
        this.setState({filtreRecette : idCategorie});
        this.loadData();
    }
    render() {
        return (
            <>
                {/* <h1>Pages recettes</h1> */}
                <div className='container'>
                    <div className='row'>
                        <div className="d-flex justify-content-around mt-4">
               
                                        <Button 
                                            bgColor= "rose-fonce"
                                            label = "Entrées"
                                            click = {()=> this.handleSelectionCategorie(1)}
                                        ></Button>
                                        <Button 
                                            bgColor= "violet"
                                            label = "Plats"
                                            click = {()=> this.handleSelectionCategorie(2)}
                                        ></Button>
                                        <Button 
                                            bgColor= "gris-fonce"
                                            label = "Desserts"
                                            click = {()=> this.handleSelectionCategorie(3)}
                                        ></Button>
              
                        </div>
                    </div>
                    <div className='row no-gutters mt-4'>
                        {
                            this.state.recettes &&
                            this.state.recettes.map(recette => {
                                return (
                                    
                                    <div className='col-12 col-md-6 col-xl-4' key={recette.id}>
                                        <Recette {...recette}></Recette>
                                    </div>
                                )    
                            })
                        }

                    </div>
                </div>

                
            </>
        );
    };
};

export default Recettes;