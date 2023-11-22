const animalCards = [

    {
        animalType: "Cat",
        imageURL: require(".//Munchkin.jpg"),
        description: "Our kittens will leave you smitten!",
        buttonText:"View Cats",
        buttonRelease:"Release"
    },

    {
        animalType:"Dog",
        imageURL: require(".//Shiba.png"),
        description: "Our dogs will actually bark for you!",
        buttonText:"View Dogs",
        buttonRelease:"Release"
    },

    {
        animalType:"Rodents",
        imageURL: require(".//Capybara.jpeg"),
        description: "Cute rodents that will bring joy to your life!",
        buttonText:"View Rodents",
        buttonRelease:"Release"
    },
    {
        adoptHREF:"./CatalogCat"
    },
    {
        adoptHREF:"./CatalogDog"
    },
    {
        adoptHREF:"./CatalogRodent"
    }
];

export default animalCards;