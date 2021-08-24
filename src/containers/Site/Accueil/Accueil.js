import React, { Component } from "react";
import './accueil.css';
import Button from "../../../components/UI/buttons/button";

class Accueil extends Component {
    render() {
        return (
            <div className=" container-fluid container-accueil">
                <div className="row h-100">
                    <div className=" titreh2 col-12 col-lg-6 d-flex flex-column justify-content-center align-items-center">
                        <div className="d-flex justify-content-center align-items-center">
                            <h2 className=" text-center">Un esprit sain dans un corps sain.</h2>
                        </div>
                    <div className="mt-5">    
                        <Button
                            label="S'inscrire"
                            bgColor = "violet"
                        ></Button>
                        </div>
                    </div>    
                    <div className="col-12  col-lg-6 d-flex justify-content-center ">
                        <div className='block-blanc d-flex justify-content-center'>
                            <p className="p-3 align-self-center text-justify">Lorem ipsum dolor sit amet, consectetur adipiscing elo mi tortor sollicitudin consequat commodo ac tempus vulputate. Nascetur viverra at orci neque, sit consectetur quam purus.</p>
                        </div>
                    </div>
                </div>
            </div>

         
        );
    };

};

export default Accueil;