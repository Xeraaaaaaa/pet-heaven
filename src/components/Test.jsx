import React from "react";


function Test(props){

    return(
    <div className="card" style={{width: '18rem'}}>
  <img src={props.img} className="card-img-top" alt="..." /> 
  <div className="card-body">
    <h5 className="card-title">{props.animal}</h5>
    <p className="card-text">{props.desc}</p>
    {/* <a href="./Adopt" className="btn btn-warning">{props.button}</a>*/} 
    <a href={props.catalogHREF} className="btn btn-warning">{props.button}</a>
    <a href="./Release" className="btn btn-danger">{props.buttonTwo}</a>
  </div>
</div>

    );
}

export default Test;