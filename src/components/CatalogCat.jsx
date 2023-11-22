import React from "react";
import animalCards from "../animalCards.js";
import CatalogCard from "./CatalogCard.jsx";
import adoptableCats from "../AdoptableCats.js";

function CatalogCat (){
    return(
        <div className="container text-center cardContainer">
        <div className="row">
          <div className="col">
            <CatalogCard
              img={animalCards[0].imageURL}
              name={adoptableCats[0].catName}
              desc={adoptableCats[0].catDesc}
              age={adoptableCats[0].catAge}
              button={adoptableCats[0].adoptButton}
            />
          </div>
          <div className="col">
          <CatalogCard
              img={adoptableCats[1].image}
              name={adoptableCats[1].catName}
              desc={adoptableCats[1].catDesc}
              age={adoptableCats[1].catAge}
              button={adoptableCats[1].adoptButton}
            />
          </div>
          <div className="col">
          <CatalogCard
              img={adoptableCats[2].image}
              name={adoptableCats[2].catName}
              desc={adoptableCats[2].catDesc}
              age={adoptableCats[2].catAge}
              button={adoptableCats[2].adoptButton}
            />
          </div>
        </div>
      </div>
    );
        
    
}

export default CatalogCat;