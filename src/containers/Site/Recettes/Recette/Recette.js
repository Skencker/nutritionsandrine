import React from "react";

const Recette = (props) =>(
<>
    <div class="list-group">
        <div href="" className="list-group-item list-group-item-action ">
            <img className='img img-fluid' src={props.image} alt={props.name}/>
        </div>
        <div className="list-group-item list-group-item-action flex-column align-items-start active">
            <div class="d-flex w-100 justify-content-center">
                <h5 class="mb-1">{ props.name }</h5>
            </div>
        </div>
    </div>
</>
);

export default Recette;