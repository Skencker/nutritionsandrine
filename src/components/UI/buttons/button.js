import React from "react";
import './button.css';

const Button = ({bgColor, label, click }) =>(
<>
    <button 
        className="btn-inscrire " 
        id={bgColor} 
        onClick={click}
        
        >{label}</button>
</>
);

export default Button;