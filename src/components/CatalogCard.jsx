import React from "react";


function CatalogCard(props){

    return(
    <div className="card" style={{width: '18rem'}}>
  <img src={props.img} className="card-img-top" alt="..." /> 
  <div className="card-body">
    <h5 className="card-title">{props.name}</h5>
    <p className="card-text">{props.desc}</p>
    <p className="card-text">{props.age}</p>
    {/* <a href="./Adopt" className="btn btn-warning">{props.button}</a>*/} 
    <a href="./Adopt" className="btn btn-success">{props.button}</a>
  </div>
</div>

    );
}

export default CatalogCard;