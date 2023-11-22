import React from "react";
import animalCards from "../animalCards.js";
import CatalogCard from "./CatalogCard.jsx";
import adoptableDogs from "../AdoptableDogs.js";

function CatalogDog (){
    return(
        <div className="container text-center cardContainer">
        <div className="row">
          <div className="col">
            <CatalogCard
              img={animalCards[1].imageURL}
              name={adoptableDogs[0].dogName}
              desc={adoptableDogs[0].dogDesc}
              age={adoptableDogs[0].dogAge}
              button={adoptableDogs[0].adoptButton}
            />
          </div>
          <div className="col">
          <CatalogCard
              img={adoptableDogs[1].image}
              name={adoptableDogs[1].dogName}
              desc={adoptableDogs[1].dogDesc}
              age={adoptableDogs[1].dogAge}
              button={adoptableDogs[1].adoptButton}
            />
          </div>
          <div className="col">
          <CatalogCard
              img={adoptableDogs[2].image}
              name={adoptableDogs[2].dogName}
              desc={adoptableDogs[2].dogDesc}
              age={adoptableDogs[2].dogAge}
              button={adoptableDogs[2].adoptButton}
            />
          </div>
        </div>
      </div>
    );
        
    
}

export default CatalogDog;