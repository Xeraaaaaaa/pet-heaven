import React from "react";

function Card(props){
    return(
      <div className="card">
      <div className="top">
        <h2 className="animal">{props.animal}</h2>
        <img className="circle-img" src={props.img} alt="animal_img" />
      </div>
      <div className="bottom">
        <p className="info">{props.desc}</p>
      </div>
    </div>
    );
}

export default Card;