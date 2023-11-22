import React from "react";
import CatalogCard from "./CatalogCard.jsx";
import adoptableRodents from "../AdoptableRodents.js";

function CatalogRodent (){
    return(
        <div className="container text-center cardContainer">
        <div className="row">
          <div className="col">
            <CatalogCard
              img={adoptableRodents[0].image}
              name={adoptableRodents[0].rodentName}
              desc={adoptableRodents[0].rodentDesc}
              age={adoptableRodents[0].rodentAge}
              button={adoptableRodents[0].adoptButton}
            />
          </div>
          <div className="col">
          <CatalogCard
              img={adoptableRodents[1].image}
              name={adoptableRodents[1].rodentName}
              desc={adoptableRodents[1].rodentDesc}
              age={adoptableRodents[1].rodentAge}
              button={adoptableRodents[1].adoptButton}
            />
          </div>
          <div className="col">
          <CatalogCard
              img={adoptableRodents[2].image}
              name={adoptableRodents[2].rodentName}
              desc={adoptableRodents[2].rodentDesc}
              age={adoptableRodents[2].rodentAge}
              button={adoptableRodents[2].adoptButton}
            />
          </div>
        </div>
      </div>
    );
        
    
}

export default CatalogRodent;