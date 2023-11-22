import React from "react";
import animalCards from "../animalCards.js";
import Test from "./Test";

const Home = () => {
    return(
        <div className="container text-center cardContainer">
        <table>
          <tr>      <div className="row">
          <div className="col">
            <Test
              img={animalCards[0].imageURL}
              animal={animalCards[0].animalType}
              desc={animalCards[0].description}
              button={animalCards[0].buttonText}
              buttonTwo={animalCards[0].buttonRelease}
              catalogHREF={animalCards[3].adoptHREF}
            />
          </div>
          <div className="col">
            <Test
              img={animalCards[1].imageURL}
              animal={animalCards[1].animalType}
              desc={animalCards[1].description}
              button={animalCards[1].buttonText}
              buttonTwo={animalCards[1].buttonRelease}
              catalogHREF={animalCards[4].adoptHREF}
            />
          </div>
          <div className="col">
            <Test
              img={animalCards[2].imageURL}
              animal={animalCards[2].animalType}
              desc={animalCards[2].description}
              button={animalCards[2].buttonText}
              buttonTwo={animalCards[2].buttonRelease}
              catalogHREF={animalCards[5].adoptHREF}
            />
          </div>
        </div>
        </tr>
        <tr><h1><b>🐾 About Us 🐾</b></h1></tr>
        <tr>Established in Singapore in 2020, we are a group of dedicated animal welfare enthusiats working to give all animals in Singapore a second chance in life!</tr>
        <tr><br></br></tr>
        <tr>Email: petheaven@petheaven.sg || Telephone: +65 12345678 || </tr>
        </table>
  
      </div>

      
    );
}

export default Home;
